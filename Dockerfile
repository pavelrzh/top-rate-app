FROM node:18-alpine3.17
WORKDIR /workdir/top_app_dock
ADD package.json package.json
RUN npm install --legacy-peer-deps
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production --legacy-peer-deps
CMD ["npm", "start"]
EXPOSE 3000