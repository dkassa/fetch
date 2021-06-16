FROM node:14.17.1

WORKDIR /fetchrewardstestapp

COPY package.json /fetchrewardstestapp/package.json
COPY package-lock.json /fetchrewardstestapp/package-lock.json

RUN npm install

COPY . /fetchrewardstestapp

CMD [ "node", "./bin/www" ]