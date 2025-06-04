# Etapa 1: Construcción de la aplicación
FROM node:24-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias necesarias
RUN npm install

# Copia todos los archivos de la aplicación al contenedor
COPY . .

# Compila la aplicación usando Vite
RUN npm run build

# Etapa 2: Configuración de Nginx con HTTPS
FROM nginx:alpine

# Copia el archivo de configuración de Nginx personalizado (que incluye HTTPS)
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de certificados SSL para HTTPS
COPY certificates/origin-cert.pem /etc/ssl/certs/origin-cert.pem
COPY certificates/origin-key.pem /etc/ssl/private/origin-key.pem

# Copia los archivos estáticos generados en la etapa de construcción al directorio predeterminado de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer los puertos 80 y 443 para HTTP y HTTPS
EXPOSE 80 443

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

