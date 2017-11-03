FROM node:7.9.0

WORKDIR /usr/app

RUN cd /usr/app
RUN yarn build

CMD ["serve", "-s", "-p", "8080", "build"]
