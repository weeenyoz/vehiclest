import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server Error - An error occured in the server");
};

export default errorHandler;
