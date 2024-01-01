// En tu manejador (getDriverByNameHandler.js)
const getDriverByName  = require("../controllers/dByName");


const getDriverByNameHandler = async (req, res, next) => {
  try {
    // Verificar si req.params.name está definido
    const name = req.params.name;
    if (!name) {
      throw new Error('Name is undefined or null');
    }

    // Llamar a la función con el nombre extraído
    const result = await getDriverByName(name);

    // Enviar la respuesta
    res.json(result);
  } catch (error) {
    console.error('Error in getDriverByNameHandler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getDriverByNameHandler;
