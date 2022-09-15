FROM node:14-alpine3.15
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD serve -s build 
EXPOSE 3000

