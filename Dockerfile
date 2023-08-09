FROM node:16.20-alpine3.18

WORKDIR app

RUN apk update && apk add --no-cache bash

COPY . . 

RUN yarn install