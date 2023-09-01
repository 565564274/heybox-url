FROM registry.cn-chengdu.aliyuncs.com/ez4leon/node:1.0
MAINTAINER 565564274@qq.com

COPY ./ /heybox-url
WORKDIR /heybox-url

RUN npm install

EXPOSE 9999

CMD ["node", "api.js"]


