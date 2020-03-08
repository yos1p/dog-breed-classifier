FROM node:buster-slim

COPY . .

RUN apt-get update && \ 
    apt-get install -y build-essential \
    wget \
    python3 \
    make \
    gcc \ 
    libc6-dev 

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]