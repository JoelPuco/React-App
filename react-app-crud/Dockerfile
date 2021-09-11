FROM node:14.17-alpine3.12 as build-prod

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.3-alpine 
COPY --from=build-prod /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", 'daemon off;']