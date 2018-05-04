
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
