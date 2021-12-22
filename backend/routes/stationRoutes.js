import {
  allStationsSchema,
  getStationSchema,
  addStationSchema,
  updateStationSchema,
  deleteStationSchema,
} from "../schemas/stationSchemas.js";
import {
  fetchAllStationsController,
  fetchStationController,
  postStationController,
  updateStationController,
  deleteStationController,
} from "../controllers/stationControllers.js";

const stationRoutes = async (app) => {
  // get all stations route
  app.get(
    "/station",
    { schema: allStationsSchema },
    fetchAllStationsController
  );

  // get a single station
  app.get("/station/:id", { schema: getStationSchema }, fetchStationController);

  // add a new station
  app.post("/station", { schema: addStationSchema }, postStationController);

  // update existing station
  app.patch(
    "/station/:id",
    { schema: updateStationSchema },
    updateStationController
  );

  // delete a station
  app.delete(
    "/station/:id",
    { schema: deleteStationSchema },
    deleteStationController
  );

  return app;
};

export default stationRoutes;
