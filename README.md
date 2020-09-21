# docker-node-time

A toy project to run a time server in a Docker container on Raspberry Pi Zero.

It displays current time in a simple website.

# Build and run

On a Raspberry Pi Zero with Docker installed:
1. Build a Docker image: docker build -t _name_ .
    (name is just a tag to make the image easy to find in the list of images)
    
2. Run the image: docker run -p 50087:8087 -d <name>
    (This will remap the internal port 8087 to external 50087)
    
3. Open the website: http://raspberrypi:50087

