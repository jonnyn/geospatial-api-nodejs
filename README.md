# fastify-crud-boilerplate

EV Charging Station application

## How to run both Backend and Frontend

- `yarn` to install dependencies on both backend and frontend
- `yarn start` or `yarn dev` to start
- `yarn test` to run tests on both backend and frontend

## Backend API

Geospatial API. Using Fastity, NodeJS, REST API, and Postgres DB.

### To run backend individually

- `cd backend`
- `yarn` to install dependencies
- `yarn start` to start server on port 8080 or `yarn dev` to start server with nodemon
- `yarn test` to run tests

Note: `.env` and `db.sql` files are included, just for local testing purpose.

### Setup local postgres db

- install postgres locally
- create `postgres` user, password `password`
- run `psql -h localhost -U postgres`
- create database, connect database, and create table as in `db.sql`.

## Frontend App

Using create-react-app, TypeScript, React-Query, and Chakra UI. Also using Context in place of global state management.

### To run FE individually

- `cd frontend`
- `yarn` to install dependencies
- `yarn start` or `yarn start:win` to start app on port 8081
- `yarn test` to run tests
