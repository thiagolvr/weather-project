FROM node:16.3.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --silent

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]
