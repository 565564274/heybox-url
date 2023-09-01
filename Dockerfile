FROM node:alpine
MAINTAINER 565564274@qq.com

COPY ./ /heybox-url
WORKDIR /heybox-url

RUN npm install

EXPOSE 9999

CMD ["node", "api.js"]


