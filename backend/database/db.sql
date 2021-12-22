CREATE DATABASE stations;

\c stations;

CREATE TABLE stations (
  id SERIAL PRIMARY KEY,
  geometry POINT NOT NULL,
  address VARCHAR(600) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  availability BOOLEAN NOT NULL,
  "createdAt" TIMESTAMP NOT NULL
);