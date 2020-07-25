FROM nginx:1.19

COPY ./dist /data/static
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

