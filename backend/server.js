import express from "express";
import dotenv from "dotenv";
import { connect_DB } from "./connect_db.js";

import carRoutes from "./routes/car.route.js";
// the interface that allow to access variables stored in the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// app.use is a middleware that will be used for all incoming requests
app.use(express.json());

// each api call will be prefixed with the respective car route
app.use("/api/car", carRoutes);
app.use("/api", carRoutes);

// ------------------------------------------------------------------------
// port that the app is going to run from
app.listen(PORT, () => {
  connect_DB(); // connecting to the MongoDB database

  console.log("Server running on port http://localhost:" + PORT);
});
