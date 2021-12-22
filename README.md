# fastify-crud-boilerplate

EV Charging Station application

## Frontend App

Using create-react-app, TypeScript, React-Query, and Chakra UI. Also using Context in place of global state management.

### How to run FE

- `yarn` to install dependencies
- `yarn start` or `yarn start:win` to start app on port 8081
- `yarn test` to run tests

## Backend API

Geospatial API. Using Fastity, NodeJS, REST API, and Postgres DB.

### How to run BE

- `yarn` to install dependencies
- `yarn start` to start server on port 8080 or `yarn dev` to start server with nodemon
- `yarn test` to run tests

Note: `.env` and `db.sql` files are included, just for local testing purpose.

### Setup local postgres db

- install postgres locally
- create `postgres` user, password `password`
- run `psql -h localhost -U postgres`
- create database, connect database, and create table as in `db.sql`.
