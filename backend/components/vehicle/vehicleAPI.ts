import express from "express";
import { getVehicles, getVehicle } from "./vehicleController";

const router = express.Router();

router.get("/", getVehicles);
router.get("/:id", getVehicle);

export default router;
