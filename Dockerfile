FROM node

COPY package.json .
RUN npm install
COPY . .

RUN npm run build
RUN npm run transpile

CMD npm run start:prod
