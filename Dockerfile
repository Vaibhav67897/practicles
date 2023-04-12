FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 52175
CMD ["npm", "start"]



