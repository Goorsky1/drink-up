FROM php:8.1.3RC1-fpm

ENV secret="axertgy@3@16"
WORKDIR /backend
COPY ./ ./
RUN apt update && apt install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql
CMD [ "php", "-S", "0.0.0.0:9000", "index.php" ]
EXPOSE 9000