FROM node:13.12.0-alpine as build

ENV NODE_ENV production
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . ./

RUN npm run build

# production env
FROM nginxinc/nginx-unprivileged:1.21-alpine

COPY --from=build /app/build /usr/share/nginx/html

USER nginx
CMD ["nginx", "-g", "daemon off;"]