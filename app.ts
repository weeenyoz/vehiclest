import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import errorHandler from "./backend/middleware/error";

import vehicleRoutes from "./backend/components/vehicle/vehicleAPI";

dotenv.config();

const app = express();

const mysqlConnnection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

mysqlConnnection.connect((err) => {
  if (!err) {
    console.log("Connected to MySql DB");
  } else {
    console.log("Error connecting to MySql DB", err);
  }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/vehicles", vehicleRoutes);
app.use(errorHandler);

export default app;
