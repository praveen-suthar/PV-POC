FROM node:latest

ENV PROJECT_DIR /home/node/app/

USER node

WORKDIR $PROJECT_DIR

COPY --chown=node:node . $PROJECT_DIR

# https://github.com/webpack/webpack/issues/14532
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN yarn --ignore-scripts
RUN yarn add --ignore-scripts uikit