import Vehicle from "./Vehicle";
import { RequestHandler } from "express";
import { EditVehicleInterface } from "./VehicleInterface";

/**
 * /api/vehicles
 * GET all vehicles
 */
export const getVehicles: RequestHandler = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.getVehicles();

    vehicles.length > 0
      ? res.status(200).json({ vehicles })
      : res.status(404).json({ message: "No vehicles found!" });
  } catch (error) {
    next(error);
  }
};

/**
 * /api/vehicles/:id
 * GET one vehicle by primary key
 */
export const getVehicle: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const vehicleNo = id;

  try {
    const vehicle = await Vehicle.getVehicle(vehicleNo);

    vehicle
      ? res.status(200).json({ vehicle })
      : res.status(404).json({ message: "No vehicle found!" });
  } catch (error) {
    next(error);
  }
};

/**
 * /api/vehicles/:id
 * UPDATE a vehicle, by primary key
 */
export const editVehicle: RequestHandler = async (req, res, next) => {
  const input: EditVehicleInterface = req.body.data;

  const vehicleNo = input.vehicleNo;

  try {
    const result = await Vehicle.editVehicle(input);

    result
      ? res.status(200).json({ message: `Vehicle ${vehicleNo} updated!` })
      : res.status(400).json({ message: `Vehicle ${vehicleNo} not found!` });
  } catch (error) {
    next(error);
  }
};
