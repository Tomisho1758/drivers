const axios = require("axios");
const { API_KEY } = process.env;
const { Driver, Teams } = require("../db");

const getDriverById = async (id) => {
  try {
    const dbDriverById = await Driver.findByPk(id, {
      attributes: ['id', 'name', 'image', 'description', 'nationality', 'dob'],
      include: [
        {
          model: Teams,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    // If a record is found in the database, return it
    if (dbDriverById) {
      return dbDriverById;
    }

    // If no record is found in the database or no ID is provided, query the API
    const response = await axios.get(
      `http://localhost:5000/drivers/${id}`
    );

    const apiDriverById = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      description: response.data.description,
      nationality: response.data.nationality,
      dob: response.data.dob,
      teams: response.data.teams,
    };

    return apiDriverById;
  } catch (error) {
    console.error('Error in getDriverById:', error);
    throw error;
  }
};

module.exports = {
  getDriverById,
};
