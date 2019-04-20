# This starts up the container for the visits server
# We'll be using the redis image for redis so don't forget to
# Start that alongside this with 'docker run redis'
FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
