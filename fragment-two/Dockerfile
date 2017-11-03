FROM node:7.9.0

WORKDIR /usr/app

RUN npm install -g serve
RUN cd /usr/app
RUN npm install
RUN npm run build

CMD ["serve", "-s", "-p", "8080", "dist"]
