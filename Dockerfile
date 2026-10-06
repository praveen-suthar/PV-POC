FROM node:16.5.0 as base

WORKDIR /usr/src/app

# Install Dependencies
COPY yarn.lock package.json ./
COPY lib/jera-design-ui ./lib/jera-design-ui
RUN yarn install
RUN yarn build-lib

FROM node:16.5.0 as builder
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ /usr/src/app/

# Copy Project files
COPY . .
RUN yarn link:jera-design-ui
RUN yarn parcel build src/index.html --no-cache --no-source-maps

FROM nginx:1.20.1-alpine

## Remove default nginx index page
RUN rm -rf /etc/nginx/html/index.html

COPY --from=builder /usr/src/app/dist /etc/nginx/html/
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf

RUN ls -la /etc/nginx/html/

EXPOSE 8000

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]