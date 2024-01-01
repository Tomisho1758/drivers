const {getAllDrivers} = require('../controllers/getAllD')
const getDriversHandler = async (req, res) => {
    try {
      const response = await getAllDrivers();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getDriversHandler,
  };
  