# --------------------------------------------------
# Step 1. Specify base image
# --------------------------------------------------
# Can't use Alpine as the base image because it doesn't have node already installed for us.
# Find another base image to use instead from https://hub.docker.com/
# Here we're using the node image tagged with alpine which will have node and npm installed already for us
FROM node:alpine

# --------------------------------------------------
# Step 2. Install some dependencies
# --------------------------------------------------
# In order to not overwrite files/folders on the downloaded image, we should specify a working directory to copy
# our application files into. By specifying it before we do the copy, Docker will use this directory as the base ./
# setting this
WORKDIR /usr/app

# Before you can even install any dependencies you need to copy the package.json from the current directory
# into a directory in the temporary image before you can run the 'npm install'. The reason we only copy the
# package.json in first is so that docker is able to simply use a cached version of the previous image in the
# event that we don't change any of the dependencies list inside the package.json. This will speed up builds as
# Docker will simply used a cached version of the image at this step and only build a new temporary image in the next
# step where we copy over the rest of the application.
COPY ./package.json ./
# Run 'npm install'
RUN npm install
# Now we copy over the rest of the app that has changed
COPY ./ ./

# Default command
CMD ["npm", "start"]