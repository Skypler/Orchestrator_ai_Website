# Use official Node 22 image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Build the project
RUN yarn build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "dev", "--host", "0.0.0.0"]

