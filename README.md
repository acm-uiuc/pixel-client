# pixel-client

Simple frontend to interact with [ACM Pixel](https://github.com/acm-uiuc/pixel)

## Stack Overview

Client Frontend: HTML, CSS, JS without any frameworks at the moment

Client Backend: Tornado webserver in python (Needed to forward terminal output via terminado)

## Setup

Requirements: node.js, docker

```bash
cd ./app/client
npm install
cd ..
docker build --tag=pixel-client .
```

## Running the server

```bash
# to build the application
docker build --tag=pixel-client .

# to build and run the application
docker build --tag=pixel-client .
docker run --name pixel_client -p 3000:80 pixel-client
```

## Restarting the server

```bash
# to shut down the application
docker rm -f pixel_client

# to rebuild and run the application
docker build --tag=pixel-client .
docker run --name pixel_client -p 3000:80 pixel-client
```

TODO: improve setup and allow for "watch" style builds and add a script that automatically does all of this
