const axios = require("axios");
const { Op } = require("sequelize");
const { Driver } = require("../db");

const getDriverByName = async (name) => {
  try {
   

    // Verificar si name es undefined o null
    if (name === undefined || name === null) {
      throw new Error('Name is undefined or null');
    }

    // Buscar en la base de datos
    const dbDrivers = await Driver.findAll({
      where: {
        name: {
          [Op.or]: [
            {
              [Op.like]: `%${name}%`,
            },
            {
              [Op.like]: `%${name}%`,
            },
          ],
        },
      },
    });
    

    

    // Si se encuentran conductores en la base de datos, retornarlos
    if (dbDrivers.length > 0) {
      
      return dbDrivers;
    }

    // Si no se encuentran conductores en la base de datos, hacer la solicitud a la API
    

    const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
    
    

    // Asegúrate de que la respuesta contiene datos y retornar esos datos
    if (response.data) {
      
      return response.data;
    } else {
      
      return [];
    }
  } catch (error) {
    
    throw error;
  }
};

module.exports = getDriverByName;
