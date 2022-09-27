FROM node:latest

WORKDIR /status-service

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 3003

CMD ["node", "."]
