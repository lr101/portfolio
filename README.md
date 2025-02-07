# My Portfolio Website

Welcome to the repository for my personal portfolio website! This website showcases my skills, projects, and experience.

## Table of Contents

*   [Overview](#overview)
*   [Getting Started](#getting-started)
*   [Deployment](#deployment)

## Overview

This portfolio website is designed to provide a comprehensive overview of my professional background and capabilities. It serves as a central hub for potential employers, collaborators, and anyone interested in learning more about me and my work. It is also my first time since forever to build my own website and using react/next.js. I must say ai makes the css part way easier...

## Getting Started

These instructions will guide you on how to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (v16 or higher)
*   [npm](https://www.npmjs.com/)
*   [Git](https://git-scm.com/)

### Installation

1.  Clone the repository:

2.  Install dependencies:

    ```bash
    pnpm install
    ```

### Running the Website

1.  Start the development server:

    ```bash
    pnpm dev
    ```

2.  Open your browser and navigate to `http://localhost:3000` (or the address provided by your development server).

## Deployment

This website is currently deployed on my own server and reachable under [lr-projects.de](https://lr-projects.de).

Github Actions are used to build and publish a docker image to github packages. Copy the [docker-compose](./docker-compose.yml) file to your local machine and run `docker-compose up -d` to start the container.

