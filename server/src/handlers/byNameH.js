// En tu manejador (getDriverByNameHandler.js)
const getDriverByName  = require("../controllers/dByName");


const getDriverByNameHandler = async (req, res, next) => {
  try {
    
    const name = req.params.name;
    if (!name) {
      throw new Error('Name is undefined or null');
    }

    
    const result = await getDriverByName(name);

    
    res.json(result);
  } catch (error) {
    console.error('Error in getDriverByNameHandler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getDriverByNameHandler;
