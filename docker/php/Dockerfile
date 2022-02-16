FROM php:8.1.3RC1-fpm

ENV secret="axertgy@3@16"
WORKDIR /backend
COPY ./src /backend
RUN apt update && apt install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql
CMD [ "php", "-S", "0.0.0.0:9000", "index.php" ]
EXPOSE 9000
# FROM php:7.4.3-fpm-alpine3.11



# # Copy the application code
# COPY . /app

# VOLUME ["/app"]
# CMD [ "php", "-S", "0.0.0.0:8080", "index.php" ]

# # EXPOSE 9000