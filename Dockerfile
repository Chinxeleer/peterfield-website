# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json bun.lockb ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM pierrezemb/gostatic

# Copy only the built dist folder to serve
COPY --from=builder /app/dist /srv/http/

# Serve the app
CMD ["-port", "8080", "-https-promote", "-enable-logging"]
