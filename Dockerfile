FROM node:14

# Create app directory
WORKDIR /Users/alexcakic/Documents/HackReactor/Immersive/SDC/product-overview/atelier-product-overview/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm Install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
