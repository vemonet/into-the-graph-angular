
## stage-0 as ‘builder’
FROM node:11 as builder

# Storing node modules on a separate layer will prevent unnecessary npm installs at each build
COPY package.json package.json
RUN npm install && mkdir /webapp && mv ./node_modules ./webapp

WORKDIR /webapp
COPY . .

# Build the angular app in production mode and store the artifacts in dist folder
RUN npm run ng build --prod


## stage-1
FROM nginx:1.14.1-alpine

# Copy our default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx website and copy dist folder from 'builder' to default nginx public folder
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /webapp/dist/rdf-graph-explorer/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
