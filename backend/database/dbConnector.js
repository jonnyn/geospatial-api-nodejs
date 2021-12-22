import pkg from "pg";
import dotenv from "dotenv";
import fastifyPlugin from "fastify-plugin";
import { PostgresConnection } from "../configuration.js";

dotenv.config();
const { Client } = pkg;

export const client = new Client(PostgresConnection);
const dbConnector = async (fastify) => {
  try {
    await client.connect();
    console.log("db connected successfully");
    fastify.decorate("db", { client });
  } catch (err) {
    console.error(err);
  }
};

export default fastifyPlugin(dbConnector);
