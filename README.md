
## Node.js with Docker project sample


### Prerequisites:

- Node.js
- Docker
- Docker-compose


### Basic info:

- Containers are isolated from each other and bundle their own application, tools, libraries and configuration files; they can communicate with each other through well-defined channels.
- The difference between a container and a virtual machine is that containers are not based on a hardware virtualization, but on OS-level virtualization.
- The advantage of containers is that they are lightweight and portable.


### Commands:

- Install Docker on Linux:
```bash
sudo apt update
sudo apt install docker.io
# restart the machine
sudo apt update
sudo apt install docker-compose
```

- Pull an image from dockerHub:
```bash
docker pull <IMAGE_NAME>:<TAG>
# example postgres latest version:
docker pull postgres:latest
# example node.js version 14:
docker pull node:14
```

- Building a docker image from the Dockerfile:
```bash
# by default it will be find the file named "Dockerfile"
docker build . --tag node-server-container
# if there is no Dockerfile in the current directory, you can specify the path to the Dockerfile like this:
docker build ./path/to/Dockerfile --tag node-server-container
```

- See docker images:
```bash
docker images -a
docker image ls -a
```

- Delete images:
```bash
docker image rm <IMAGE_ID>
docker rmi <IMAGE_ID>
```

- Create/Build an image with specifying the image name (tag):
```bash
docker build . -t node-server
```

- Run a container with name "node-server-container" by the image name:
```bash
docker run -d --name node-server-container node-server-image
# "-d" means that we'll detach after running the command
# by default it will read the "node-server-image" from the local machine
# but if it will not find it, it will try to find it in the dockerHub remote repository
```

- See containers:
```bash
docker ps -a
docker container ls -a
```

- Delete container:
```bash
# stop and delete the container
docker stop <CONTAINER_ID>
docker rm <CONTAINER_ID>
# delete force:
docker rm <CONTAINER_ID> -f
```

- Create ".dockerignore" for ignoring files and folders when building the docker image

- Run our container from created image:
```bash
# first number is the public port (http://localhost:5001)
# second number is the docker container internal port
docker run -p 5001:5000 -d --name node-server-container node-server-image
```

- Login to "node-server-container" container using "bash" editor
```bash
# "-it" means the interactive mode
docker exec -it node-server-container bash
# "exit" to exit from the container

# or run a command inside the container
docker exec -it node-server-container <COMMAND>
# example:
docker exec -it node-server-container npm run migrate
```

- In this step when we'll change something in our app, (for example in "index.js"),
  it will not affect on container files which we've already run.

- Create docker-compose.yml with setting the environment variables and volumes:
```bash
# start the compose services
docker-compose up -d --build

# execute a command inside the container
docker exec <CONTAINER_ID> npm run migrate
docker exec <CONTAINER_ID> npm run seed

# test via connecting to the Postgres database
# (if it's publicly available for external connections)
psql -h localhost -p 4321 -U postgres
\c postgres
\dt
SELECT * FROM users;
\q
# or test via server
curl http://localhost:5001/users

# stop the compose services
docker-compose down
```

- See volumes:
```bash
docker volume ls -a
```

### Resources:

- [Classsed: Docker Tutorial (+ Node & Postgres setup)](https://www.youtube.com/watch?v=Dm0CmZz-QyI)
- [Complete Source Code](https://github.com/hidjou/classsed-docker-tutorial/tree/done)

- [Can’t delete docker image with dependent child images](https://stackoverflow.com/questions/38118791/can-t-delete-docker-image-with-dependent-child-images/43463968#43463968)
- [Postgres, Docker & Node.js - Password authentication failed (Connection refused or psql: FATAL: role "root" does not exist)](https://stackoverflow.com/questions/43532280/postgres-docker-node-js-password-authentication-failed-connection-refused)
- [psql: FATAL: password authentication failed for user "postgres"](https://github.com/sameersbn/docker-postgresql/issues/112)
- [Postgres, Docker & Node.js - Password authentication failed (Connection refused or psql: FATAL: role "root" does not exist)](https://stackoverflow.com/questions/43532280/postgres-docker-node-js-password-authentication-failed-connection-refused?noredirect=1&lq=1)
- [How to fix an error: password authentication failed for the user in PostgreSQL](https://hassanannajjar.medium.com/how-to-fix-error-password-authentication-failed-for-the-user-in-postgresql-896e1fd880dc)
- [postgres on dockerhub](https://hub.docker.com/_/postgres)


### TODOs:

- Setup Postgres container with another user and password.


### Author:

- [BoolFalse](https://boolfalse.com/)
