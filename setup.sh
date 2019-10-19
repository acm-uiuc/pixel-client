cd ./client
npm install
cd ..
docker build --tag=user-container ./server/container
docker build --tag=pixel-client .
