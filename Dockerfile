FROM node:18

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 1500

CMD ["npm","run","start"]

