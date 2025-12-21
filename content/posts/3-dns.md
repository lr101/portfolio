---
title: Docker DNS Setup
date: '2025-12-13T13:05:22+01:00'
draft: false
---
This document describes practical options for using Pi-hole as your local DNS resolver together with Docker containers running on the same host.

Summary
-------

Docker isolates container networks from the host and each other by design. Running a DNS resolver (Pi-hole) in a container on the same host introduces a challenge: containers must be able to reach the resolver's IP, but Docker's default network isolation and DNS config don't guarantee that when the resolver runs inside a container on the same host.

This guide explains recommended approaches, trade-offs, concrete commands and docker-compose examples to make Pi-hole usable as DNS for other containers.

Problem statement
-----------------

- Running Pi-hole in a container and expecting other containers to resolve via it fails when DNS lookups inside containers use Docker's internal DNS or when the resolver is inaccessible due to network isolation.
- Using `network_mode: host` for all containers makes the resolver available but removes container network isolation and can cause port conflicts.

Recommended solution (practical balance)
---------------------------------------

Create a user-defined Docker network with a specific subnet, attach Pi-hole to that network with a static IP, and attach other containers to the same network. Configure those services to use the Pi-hole static IP as their DNS server. This keeps service reachability simple while avoiding `host` networking for every container.

Pros:

- Containers can reach Pi-hole using the static IP.
- Avoids `network_mode: host` for all containers.

Cons:

- Containers on that network can still reach each other (less isolation than fully separate networks).
- Requires managing static IPs and the dedicated network.

Alternatives
------------

- Host network mode for Pi-hole and/or clients (quick but removes isolation).
- Run Pi-hole on the host (not in a container) so it is reachable at the host IP.
- Use an external DNS forwarder on the host pointing to Pi-hole container (complex bridging required).

Configuration (step-by-step)
----------------------------

1. Create a dedicated Docker network with a fixed subnet and gateway. Choose an IP range that does not collide with your host network:

```sh
docker network create --gateway 172.20.0.1 --subnet 172.20.0.0/24 backend
```

2. Example `docker-compose` snippet for Pi-hole with a static IPv4 address on the `backend` network:

```yaml
services:
  pihole:
    image: pihole/pihole:latest
    container_name: pihole
    environment:
      TZ: "Europe/Berlin"
      FTLCONF_dns_listeningMode: "all"
    volumes:
      - ./etc-pihole:/etc/pihole
      - ./etc-dnsmasq.d:/etc/dnsmasq.d
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "4080:80"
    restart: unless-stopped
    cap_add:
      - NET_ADMIN
    networks:
      backend:
        ipv4_address: 172.20.0.100

networks:
  backend:
    external: true
```

3. Example `docker-compose` snippet for another service (Traefik) that uses Pi-hole as DNS by specifying `dns` and joining the same network:

```yaml
services:
  traefik:
    image: traefik:v3
    container_name: traefik
    restart: always
    ports:
      - "443:443"
      - "80:80"
    dns:
      - 172.20.0.100
    networks:
      - backend
    volumes:
      - ./traefik.yml:/etc/traefik/traefik.yaml:ro
      - ./dynamic:/etc/traefik/dynamic
      - ./certificates:/etc/traefik/certificates

networks:
  backend:
    external: true
```

Notes
-----

- The Pi-hole container must be reachable on the network's IP (here `172.20.0.100`). Ensure no IP conflict.
- Binding host ports 53 (DNS) and 80 (HTTP) from the Pi-hole container to the host can conflict with other services. Adjust ports or use traefik on different host ports if needed.
- `FTLCONF_dns_listeningMode: "all"` helps Pi-hole listen on container network interfaces; use with care.
