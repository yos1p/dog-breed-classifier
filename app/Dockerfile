FROM node:13-alpine

COPY . .

RUN apk add --no-cache --virtual .gyp python make g++ && \ 
    npm install

EXPOSE 3000

CMD [ "node", "index.js" ]