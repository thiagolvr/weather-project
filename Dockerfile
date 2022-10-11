FROM node:16.3.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --silent

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "start" ]
