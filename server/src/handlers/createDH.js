// En tu manejador (createDriverHandler.js)
const createDriver = require('../controllers/createD');
const { Driver } = require("../db");

const createDriverHandler = async (req, res) => {
  

  try {
    const { name, image, teams, description, nationality, dob } = req.body;
    
    const result = await createDriver(name, image, teams, description, nationality, dob);
    
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in createDriverHandler:", error); // Agrega esta línea
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createDriverHandler,
};
