FROM postgres:alpine
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD psswrd
ENV POSTGRES_DB drink-up
COPY ./migrations/*.sql /docker-entrypoint-initdb.d/