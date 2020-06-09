import Vehicle from "./Vehicle";
import { RequestHandler } from "express";

/**
 * /api/vehicles
 */
export const getVehicles: RequestHandler = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.query();

    vehicles.length > 0
      ? res.status(200).json({ vehicles })
      : res.status(404).json({ message: "No vehicles found!" });
  } catch (error) {
    next(error);
  }
};

/**
 * /api/vehicles/:id
 */
export const getVehicle: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.query().where({ vehicleNo: id });

    vehicle.length > 0
      ? res.status(200).json({ vehicle })
      : res.status(404).json({ message: "No vehicle found!" });
  } catch (error) {
    next(error);
  }
};
