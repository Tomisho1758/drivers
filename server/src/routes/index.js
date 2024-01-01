const { Router } = require("express");
const driverRouter  = require("../routes/DRoutes");
const teamsRouter= require('../routes/TRoutes')
const router = Router();
router.use("/drivers", driverRouter);
router.use("/teams", teamsRouter);
module.exports = router;
