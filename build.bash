
# to remove existing container, build and start new

git pull
npm run-script build
sudo docker build -t portal-ui .
sudo docker stop portal-ui && sudo docker rm portal-ui
sudo docker run -d --network=host --name portal-ui portal-ui
