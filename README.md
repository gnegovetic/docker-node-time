# docker-node-time

A toy project to run a time server in a Docker container on Raspberry Pi Zero.

It displays current time in a simple website.

# Build and run

On a Raspberry Pi Zero with Docker installed:
1. Build a Docker image: ``` docker build -t node-time . ```
    (name is just a tag to make the image easy to find in the list of images)
    
2. Run the image: ``` docker run --publish 8087:8087 --detach --name node-time-server node-time ```
    (This will remap the internal port 8087 to external 8087)
    
3. Open the website: http://localhost:8087

