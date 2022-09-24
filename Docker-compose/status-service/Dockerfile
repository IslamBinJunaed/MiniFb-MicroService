FROM node:latest

WORKDIR /status-service

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 5002

CMD ["node", "."]
