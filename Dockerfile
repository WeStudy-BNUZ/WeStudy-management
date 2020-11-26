FROM nginx:latest
MAINTAINER lavie
COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/