import fastify from "fastify";
import fastifyCors from "fastify-cors";
import dbConnector from "./database/dbConnector.js";
import stationRoutes from "./routes/stationRoutes.js";

const PORT = process.env.PORT || 8080;

const server = fastify();

server.register(dbConnector);
server.register(fastifyCors);
server.register(stationRoutes);

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on port ${PORT}`);
});
