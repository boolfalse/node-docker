
# use base "node" image from Node.js team
FROM node:15

# container's working directory
# the relative path will start from here.
# so any time we run the command
# we'll not specify "app" directory
WORKDIR /app

# copy the "package.json" to the "app" directory
# technically we can write "COPY package.json /app" as well
COPY package.json .

# build time: install our dependencies
RUN npm i

# copy all our app source files to the container
COPY . ./

# our app will listen to 3000 port
EXPOSE 3000

# runtime: when we deploy our container, it will run "node index.js"
CMD ["node", "index.js"]
