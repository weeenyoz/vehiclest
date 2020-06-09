import path from "path";
import dotenv from "dotenv";

dotenv.config();

export const obj = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    },
    migrations: {
      directory: path.join(__dirname + "/db/migrations"),
    },
    seeds: {
      directory: path.join(__dirname + "/db/seeds"),
    },
  },
};
