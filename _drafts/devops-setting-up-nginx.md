
install it
sudo apt-get install -y nginx

configure it
{ highlight }
#/etc/nginx/nginx.conf
user www-data;
worker_processes 4;
pid /run/nginx.pid;

events {
  worker_connections 768;
}

http {
  server {
    listen 80;
    server_name localhost;
    root /opt/skii/webapps/build;

    location / {
      try_files $uri /index.html;
      add_header Cache-Control public;
      expires 1d;
    }
  }
}
{ highlight }

reload it to pick up config
sudo nginx -s reload

!! never run nginx as root user !!
most nginx configurations start as root, bind to privileged ports
(80 and 443 are below 1024), and then immediately drop privileges to a
configured user.
(except in a docker container, that's ok)
this happens ootb in ubuntu with the installation above
