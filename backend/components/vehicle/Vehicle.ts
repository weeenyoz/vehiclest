import { Model, UpsertGraphOptions, transaction } from "objection";
import { VehicleInterface, EditVehicleInterface } from "./VehicleInterface";

const knex = require("../../db/knex");
Model.knex(knex);

class Vehicle extends Model implements VehicleInterface {
  public static tableName = "vehicle";

  public vehicleNo: string;
  public department: string;
  public lastServiceDate: string;
  public nextServiceDate: string;
  public vehType: string;
  public parkinglot: string;
  public status: string;
  public rentalId: string;
  public leaseStart: string;
  public leaseEnd: string;
  public vehicleModel: string;
  public gearType: string;
  public catType: string;
  public modified_date: string;
  public Remarks: string;

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        vehicleNo: { type: "string", maxLength: 45 },
        department: { type: "string", maxLength: 45 },
        lastServiceDate: { type: "string", maxLength: 45 },
        nextServiceDate: { type: "string", maxLength: 45 },
        vehType: { type: "string", maxLength: 45 },
        parkinglot: { type: "string", maxLength: 45 },
        status: { type: "string", maxLength: 45 },
        rentalId: { type: "string", maxLength: 11 },
        leaseStart: { type: "string", maxLength: 45 },
        leaseEnd: { type: "string", maxLength: 45 },
        vehicleModel: { type: "text", maxLength: 145 },
        gearType: { type: "string", maxLength: 45 },
        catType: { type: "string", maxLength: 45 },
        modified_date: { type: "string", maxLength: 45 },
        Remarks: { type: "text", maxLength: 255 },
      },
    };
  }

  public static async getVehicles() {
    try {
      return await Vehicle.query();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public static async editVehicle(input: EditVehicleInterface) {
    const { vehicleNo } = input;

    const data = input;
    delete data.vehicleNo;

    try {
      const result = await transaction(Vehicle, async (Vehicle) => {
        return await Vehicle.query()
          .where("vehicleNo", vehicleNo)
          .update({ ...data });
      });

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Vehicle;
