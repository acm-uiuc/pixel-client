# pixel-client

Simple frontend to interact with [ACM Pixel](https://github.com/acm-uiuc/pixel)

## Stack Overview

Client Frontend: HTML, CSS, JS without any frameworks at the moment

Client Backend: Tornado webserver in python (Needed to forward terminal output via terminado)

## Setup

Requirements: node.js, docker

```bash
./setup.sh
```

## Running the server

```bash
# to build the application
docker build -t pixel-client .

# to build and run the application
docker build -t pixel-client .
docker run -v /var/run/docker.sock:/var/run/docker.sock -p 3000:80 pixel-client
```

## Updating the server

```bash
# to build updated version
docker build -t pixel-client .

# to remove current container
docker rm -f pixel_client

# to run the new container
docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 3000:80 pixel-client
```


TODO: improve setup and allow for "watch" style builds and add a script that automatically does all of this
