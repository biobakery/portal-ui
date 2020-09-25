
# to remove existing container, build and start new

git pull
rm -rf /home/hutlab_public/portal-ui/live
npm run-script build
sudo docker build -t portal-ui .
sudo docker stop portal-ui && sudo docker rm portal-ui
cp -r /home/hutlab_public/portal-ui/build /home/hutlab_public/portal-ui/live
sudo docker run -d --network=host -v /home/hutlab_public/portal-ui/live/:/usr/share/nginx/html/ -v /home/hutlab_public/portal-ui/infra/nginx.conf:/etc/nginx/conf.d/nginx.conf -v /home/hutlab_public/letsencrypt/config:/etc/letsencrypt -v /home/hutlab_public/ssl_cert_dhparam:/etc/ssl_cert --name portal-ui portal-ui
