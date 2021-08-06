FROM node:alpine

# Create app directory
WORKDIR /usr/app

# Install dependecies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Starte the server
EXPOSE 8087
CMD [ "node", "index.js" ]
