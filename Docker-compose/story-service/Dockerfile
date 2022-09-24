FROM node:latest

WORKDIR /story-service

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 5003

CMD ["node", "."]
