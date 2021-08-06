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

# Build with: docker build -t <name> .
# Run with: docker run -p 50087:8087 -d <name>