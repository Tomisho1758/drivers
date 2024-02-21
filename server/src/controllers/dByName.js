const axios = require("axios");
const { Op } = require("sequelize");
const { Driver } = require("../db");

const getDriverByName = async (name) => {
  try {
   

    
    if (name === undefined || name === null) {
      throw new Error('Name is undefined or null');
    }

    
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
    

    

    
    if (dbDrivers.length > 0) {
      
      return dbDrivers;
    }

 
    

    const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
    
    

    
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
