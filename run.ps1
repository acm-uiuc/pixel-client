docker build --tag=pixel-client .
docker run -v /var/run/docker.sock:/var/run/docker.sock -p 3000:80 pixel-client
