FROM node:17-slim
LABEL maintainer "Alan Lira <alan.lira08@gmail.com>"
WORKDIR /home/node/app
ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT
RUN npm install -g npm@latest
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
WORKDIR /home/node/app/projeto
CMD node api/index.js

# comando abaixo abre direto a execução do node
# docker-entrypoint.sh