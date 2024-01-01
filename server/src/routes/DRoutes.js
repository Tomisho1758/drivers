const { Router } = require("express");
const { getDriversHandler } = require("../handlers/getAllH");
const { createDriverHandler}= require("../handlers/createDH")
const { getDriverByIdHandler}=require("../handlers/byIdDH")
const  getDriverByNameHandler=require("../handlers/byNameH")
const driverRouter = Router();

driverRouter.get("/", getDriversHandler);
driverRouter.post("/", createDriverHandler);
driverRouter.get("/:id",getDriverByIdHandler);
driverRouter.get("/name/:name",getDriverByNameHandler);
module.exports = driverRouter;
