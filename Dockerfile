
# use base "node" image from Node.js team
FROM node:16

# the relative path will start from this container's working directory.
# so any time we run the command, we'll not specify "app" directory
WORKDIR /app

# copy everything from the current directory to the container's working directory ("app" directory)
COPY . .

# build time: install our dependencies
RUN npm install
#RUN npm migrate
#RUN npm seed

# our app will listen to 5000 port
EXPOSE 5000

# runtime: when we deploy our container, it will run "node index.js"
CMD ["node", "index.js"]
