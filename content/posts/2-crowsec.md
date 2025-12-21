---
title: Crowdsec
date: '2025-12-13T13:05:22+01:00'
draft: false
---

# CrowdSec with Traefik in Docker

This guide explains how to set up CrowdSec with Traefik in Docker for real-time protection and virtual patching.

CrowdSec is an open‑source, collaborative security engine that analyzes logs and runtime behavior to detect and respond to attacks. It runs locally, applies community‑maintained detection scenarios, and shares decisions so operators benefit from collective intelligence.

Common uses include protecting web servers, APIs and reverse proxies (like Traefik), SSH and mail services; performing real‑time blocking, virtual patching, alerting, and threat intelligence enrichment.

## 1. Prepare Log Acquisition

Create `crowdsec/acquis.yaml` to tell CrowdSec where to find Traefik logs:

```yaml
---
filenames:
 - /var/log/traefik/access.log
labels:
  type: traefik

---
listen_addr: 0.0.0.0:7422
appsec_config: crowdsecurity/virtual-patching
name: myAppSecComponent
source: appsec
labels:
  type: appsec
```

## 2. Docker Compose Services

Add both Traefik and CrowdSec to your `docker-compose.yml`:

```yaml
services:
  traefik:
    image: traefik:v3
    container_name: traefik
    volumes:
      - ./dynamic:/etc/traefik/dynamic
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./traefik.yml:/etc/traefik/traefik.yaml:ro"
      - "./traefik-logs:/logs" # Shared volume for logs
    ports:
      - "80:80"
      - "443:443"

  crowdsec:
    image: crowdsecurity/crowdsec:latest
    container_name: crowdsec
    environment:
      - COLLECTIONS=crowdsecurity/traefik crowdsecurity/appsec-virtual-patching crowdsecurity/appsec-generic-rules
    volumes:
      - "./crowdsec/data:/var/lib/crowdsec/data"
      - "./crowdsec/etc:/etc/crowdsec"
      - "./traefik-logs:/var/log/traefik:ro" # Read Traefik logs
      - "./crowdsec/acquis.yaml:/etc/crowdsec/acquis.yaml:ro"

```

Once the crowdsec container is running, you must generate your key that will be used in traefik to authenticate to the crowdsec container:

```sh
docker exec crowdsec cscli bouncers add traefik-bouncer
```

## 3. Traefik Plugin Configuration

In your `traefik.yml`, enable the CrowdSec bouncer plugin:

```yaml
accessLog:
  filePath: "/logs/access.log"
  format: json

experimental:
  plugins:
    bouncer:
      moduleName: github.com/maxlerebourg/crowdsec-bouncer-traefik-plugin
      version: "v1.4.6"
```

## 4. Crowdsec Middleware
Create a file like `dynamic/crowdsec.yml` (or add to your existing dynamic config) and add the key to the `.env` file.

```yaml
http:
  middlewares:
	crowdsec:
      plugin:
	    bouncer:
		  crowdsecMode: live
		  enabled: true
		  crowdsecAppsecEnabled: true
		  crowdsecAppsecHost: "crowdsec:7422"
		  crowdsecAppsecPath: "/"
		  crowdsecAppsecFailureBlock: true
		  crowdsecAppsecUnreachableBlock: true
		  crowdsecAppsecBodyLimit: 10485760
		  crowdsecLapiKey: ${CROWDSEC_BOUNCER_API_KEY}
		  crowdseclapischeme: http
		  crowdseclapihost: "crowdsec:8080"
		  crowdsecLapiTLSInsecureVerify: true
		  clientTrustedIPs:
		    - 10.217.236.0/24
```

## 5. Environment Variables

Set `CROWDSEC_BOUNCER_API_KEY` in your `.env` file for secure communication.

## 5. Start Everything

Start docker compose:

```sh
docker-compose up -d
```

See metrics:

```sh
docker exec crowdsec cscli metrics
```

