FROM node:20-alpine

ENV DB_USER=agustin \
    DB_HOST=database \
    DB_NAME=Tienda \
    DB_PASSWORD=12345 \
    DB_PORT=5432
    
WORKDIR /opt/tienda

COPY package*.json /

RUN npm install 
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]