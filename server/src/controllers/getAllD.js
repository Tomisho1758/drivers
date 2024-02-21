const { Driver, Teams } = require("../db");
const axios = require("axios");

const getDriversDb = async () => {
  const allDrivers = await Driver.findAll({
    include: [
      {
        model: Teams,
        attributes: ["name"],
        through: { attributes: [] }, 
      },
    ],
  });
  return allDrivers;
};

const getDriversApi = async () => {
  
  const response = await axios.get(`http://localhost:5000/drivers`);
  return response.data;
};

const getAllDrivers = async () => {
  const driversApi = await getDriversApi();
  const driversDb = await getDriversDb();

  const transformedDriversApi = driversApi.map((apiDriver) => ({
    id: apiDriver.id,
    name: `${apiDriver.name.forename} ${apiDriver.name.surname}`, 
    image: apiDriver.image.url,           
    dob: apiDriver.dob,
    nationality: apiDriver.nationality,
    teams: apiDriver.teams, 
    description: apiDriver.description,
    source: 'API',
  }));
  
  const transformedDriversDb = driversDb.map((dbDriver) => ({
    id: dbDriver.id,
    name: `${dbDriver.name} `, 
    image: dbDriver.image,          
    dob: dbDriver.dob,
    nationality: dbDriver.nationality,   
    description: dbDriver.description,
    teams: dbDriver.teams,
    source: 'Database',
  }));
  
  const allDrivers = [...transformedDriversApi, ...transformedDriversDb];

  return allDrivers;
};

module.exports = {
  getDriversDb,
  getDriversApi,
  getAllDrivers,
};
