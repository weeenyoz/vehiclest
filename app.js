const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

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

module.exports = app;
