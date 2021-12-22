"use strict";

import Fastify from "fastify";
import dbConnector from "./database/dbConnector.js";
import stationRoutes from "./routes/stationRoutes.js";

describe("requests station routes", () => {
  let server;

  beforeAll(() => {
    server = Fastify({});
    server.register(dbConnector);
    server.register(stationRoutes);
    // await server.ready();
  });

  afterAll((done) => {
    server.close();
    done();
  });

  it("GET all stations, returns 200", async () => {
    const response = await server.inject({ method: "GET", url: "/station" });
    const payload = JSON.parse(response.body);
    // Check alive
    expect(response.statusCode).toEqual(200);
    // Check type
    expect(Array.isArray(payload)).toBeTruthy();
    //Check data
    expect(payload[0].id).toBeDefined();
  });

  it("GET a station, returns 200", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/station/?id=1",
    });
    const payload = JSON.parse(response.body);
    // Check alive
    expect(response.statusCode).toEqual(200);
    // data id = 1
    expect(payload.id).toEqual(1);
  });

  it("GET a non-existing station, returns 200 and empty body", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/station/?id=0",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual("");
  });
});
