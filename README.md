# pixel-client

Simple frontend to interact with [ACM Pixel](https://github.com/acm-uiuc/pixel)

## Stack Overview

Client Frontend: HTML, CSS, JS without any frameworks at the moment

Client Backend: Tornado webserver in python (Needed to forward terminal output via terminado)

## Setup

Requirements: node.js, python3

```bash
npm install
pip3 install -r ./server/requirements.txt
```

## Running the server

```bash
# to build the application
npm run build

# to build and run the application
npm run app
```

TODO: improve setup and allow for "watch" style builds
