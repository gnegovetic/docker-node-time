FROM node:alpine

# Create app directory
WORKDIR /usr/app

# Copy all files
COPY . .

# Install NPM packages
RUN npm install

# Starte the server
EXPOSE 8087
CMD node index.js

