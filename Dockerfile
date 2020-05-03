FROM node:10
WORKDIR /usr/src/app
COPY package.json ./
RUN npm config set registry http://registry.npm.taobao.org && npm install
COPY ../
#设置环境变量
# ENV NODE_ENV=production
# ENV MONGO_URI=mongodb://db:27017/vue-admin
# ENV HOST=0.0.0.0
# ENV PORT=3000
#开放容器端口
EXPOSE 3000
CMD ["node" "./bin/www"]