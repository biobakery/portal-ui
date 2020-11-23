
# to remove existing container, build and start new

git pull
sudo rm -rf /usr/share/nginx/html
npm run-script build
sudo docker build -t portal-ui .
sudo docker stop portal-ui && sudo docker rm portal-ui
sudo cp -r ~/portal-ui/build /usr/share/nginx/html
sudo docker run -d --network=host -v /usr/share/nginx/html:/usr/share/nginx/html -v ~/portal-ui/infra/nginx.conf:/etc/nginx/conf.d/nginx.conf -v /etc/letsencrypt:/etc/letsencrypt -v ~/ssl_cert_dhparam:/etc/ssl_cert --name portal-ui portal-ui
