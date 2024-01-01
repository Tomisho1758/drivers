const { Router } = require("express");
const { getTeamsHandler } = require("../handlers/getAllTH");
const  getTeamByNameHandler  = require("../handlers/tByNameH");
const teamsRouter = Router();

teamsRouter.get("/", getTeamsHandler);
teamsRouter.get("/name/:name", getTeamByNameHandler);
module.exports = teamsRouter;