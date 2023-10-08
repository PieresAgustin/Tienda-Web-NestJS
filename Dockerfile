FROM node:20-alpine

ENV DB_USER agustin
ENV DB_HOST database
ENV DB_NAME Tienda
ENV DB_PASSWORD 12345
ENV DB_PORT 5432
    
WORKDIR /opt/tienda

COPY package*.json /

RUN npm install 
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]