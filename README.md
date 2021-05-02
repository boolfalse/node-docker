
## Node.js with Docker

### Prerequisites:

- Docker installed.

### Build:

```
# build our docker image ("." is the context)
docker build .

# see running docker images
docker image ls

# delete unused (images with <none> respository name) images like
docker image rm d8ba540fe733

# create docker image with specifying the image name as "node-app-image"
docker build -t node-app-image .

# run docker container with name "node-app" by image name from our created image
# "-d" means that we'll detach after running the command
docker run -d --name node-app node-app-image

# see running containers
docker ps

# remove our running "node-app" container
# "-f" means that it will stop the running container before deleting that
docker rm node-app -f

# make sure that we've deleted the container
docker ps

# port-binding.
# first number is the public port (http://localhost:3000)
# second number is the docker container internal port
docker run -p 3000:3000 -d --name node-app node-app-image
```
