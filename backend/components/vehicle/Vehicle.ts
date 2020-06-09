import { Model } from "objection";
import { VehicleInterface } from "./VehicleInterface";

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
      required: [""],
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
}

export default Vehicle;
