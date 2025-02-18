import express from "express";

import { getCars } from "../controllers/car.controller.js";
import { postCars } from "../controllers/car.controller.js";
import { putCars } from "../controllers/car.controller.js";
import { updateAllCars } from "../controllers/car.controller.js";
import { deleteCars } from "../controllers/car.controller.js";
import { findCarsOlderThanFiveYears } from "../controllers/car.controller.js";

// the router is a middleware that will be used to handle incoming requests to the "/api/car" path
const router = express.Router();

// middleware that parses JSON data in the req.body
router.use(express.json());
// -----------------------------------------------------------------------
router.get("/", getCars);
// -----------------------------------------------------------------------
router.get("/olderCars", findCarsOlderThanFiveYears);
// -----------------------------------------------------------------------
router.post("/", postCars);
// -----------------------------------------------------------------------
router.put("/:id", putCars);
// ---------------------------------------------------------------------
router.put("/", updateAllCars);
// -----------------------------------------------------------------------
router.delete("/:id", deleteCars);

export default router;
