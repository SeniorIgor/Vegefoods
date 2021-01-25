FROM node:12-alpine

WORKDIR /

COPY package*.json ./

RUN npm install
RUN npm run client:install
RUN npm run client:build

COPY . .

EXPOSE 80

CMD ["npm", "start"]