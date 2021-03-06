FROM node:17-slim
LABEL maintainer "Alan Lira <alan.lira08@gmail.com>"
WORKDIR /home/node/app
ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT
COPY package.json package-lock.json* .eslintrc.json ./
RUN npm install --no-optional && npm cache clean --force
WORKDIR /home/node/app/api
CMD npm run start

# comando abaixo abre direto a execução do node
# docker-entrypoint.sh