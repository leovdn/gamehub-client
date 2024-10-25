FROM node:18

#Setup working directory
WORKDIR /usr/src/web

#Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

#Copy source files
COPY . .

#Running the app
CMD ["yarn","start"]