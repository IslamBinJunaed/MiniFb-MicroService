FROM node:latest

WORKDIR /user-service

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 5001  

CMD ["node", "."]
