FROM node:12-alpine

WORKDIR /

# COPY package*.json ./
COPY . .

RUN npm install
RUN npm run client:install
RUN npm run client:build

EXPOSE 80

CMD ["npm", "start"]