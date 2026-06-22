FROM node:14-alpine
WORKDIR /chisholm_jackson_ui_garden
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8083
CMD ["npm", "run", "storybook"]

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
