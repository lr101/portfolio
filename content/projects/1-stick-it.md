---
draft: false
title: Stick-It App
---

Stick-It lets you capture where stickers and street art are found, and explore posts from others on an interactive map.

Key features:
- Groups and community: Share posts with groups and discover new content from friends and others.
- Interactive map: View stickers and groups on the map and explore local rankings.
- Fast posting: Take a photo, tag it to a location, and share in seconds.
- Overview feed: Quickly enable/disable groups to curate your feed.

## Stats

- Number of Accounts: 600+
- Total Installs on Android (2026): 400+
- Number of Images: 4000+
- Number of Groups: 70+

But honestly, at the moment the app is pretty much dead :)). It was fun tho, to see everyone in my friend group using it, getting feedback and feature requests.

## Technologies

This project got relativly big over time. I tried out a few technologies I have never used before here and there. This is the current tech stack:

### App

The app is written in **Flutter** and available on Android and IOs. The web app was available for some time as well but is currently not being hosted. 
It is the primary frontend access way for users to interact and post new stickers. It is structured as follows:

- lib/data: Stores the data providers and state management logic using **Riverpod**. This includes the app config, dtos, entities, repositories and the state services.
- lib/features: Stores the views and data logic for each of the views in a folders seperated by features.
- lib/util: Stores logic util operations, like routing, theme and error banners.
- lib/widgets: These are not features but more general widgets, used by the views to remove duplications and have a more streamline code base.

When data is requested by a feature, it asks the state provider, which first checks in the local repository if the data is available. Is this not the case the backend is requested for the data. Then the state is updated, which propagetes to the view, which then automatically updates.

The app is designed with offline-first in mind, therefore images can be taken without an internet connection and then synced on the next app open. All data is either synced on startup or synced on demand and stored locally for some time.

See on [GitHub](https://github.com/lr101/stick-it)

### Backend

The packend server is written in **kotlin** using **spring boot**. It provides all functionality using a REST API.

For metadata storoage a **postgres** database is used, with the postgis extension for localization of different boundaries up to administrative 2 zones enabled. The authentication is implemented using spring-security using refresh and jwt-auth tokens.
Using GitHub actions a docker image is always available at Docker Hub [here](https://hub.docker.com/repository/docker/lrprojects/stick-it-server/general).

For image storage a **minio** bucket is used. Everything can be hosted locally and set up with this repo.

For logging the application logs are written to a **logback** file and metric data is optionally published into **influxdb** which can be displayed using **grafana**.

All services are supposed to be running in docker containers using the provided docker compose file.

See on [GitHub](https://github.com/lr101/MonaServer)

### API

The **openapi** definition can be found in this [repo](https://github.com/lr101/MonaServerApi) or when starting the server under `/public/swagger-ui/index.html`. It is used to generate the client sdk for both backend and frontend.

See on [GitHub](https://github.com/lr101/MonaServerApi)

## AI

This was never completed but more of a fun side-quest: I tried to create a machine learning model that allows reidentification of the groups when someone uploads a sticker, allowing to check if the correct is selected or when it gets really good to automatically select the correct group.,

This was never completed and is more of a POC. The conclusion was that this does actually work quite well for groups that use a specific sticker, but as some have more of a category of stickers, it was hard to actually use it in practice.

Also privacy concerns existed, as user data was used for the training.... Ups

See on [GitHub](https://github.com/lr101/stick-it-ai)



 

