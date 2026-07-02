FROM node:20-alpine
WORKDIR /chisholm_jackson_ui_garden
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook"]
