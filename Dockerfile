FROM node:20-slim as development

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

FROM node:20-slim as production-build

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
WORKDIR /app
COPY --from=development /app/node_modules /app/node_modules
COPY  . .
RUN yarn build

FROM nginx:alpine as production

WORKDIR /var/www/html
COPY --from=production-build /app/dist .
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf