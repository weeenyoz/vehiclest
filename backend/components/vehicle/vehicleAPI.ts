import express from "express";
import { getVehicles, getVehicle, editVehicle } from "./vehicleController";

const router = express.Router();

router.get("/", getVehicles);
router.route("/:id").get(getVehicle).put(editVehicle);

export default router;
