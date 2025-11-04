FROM node:18.18-alpine

WORKDIR /store-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start
