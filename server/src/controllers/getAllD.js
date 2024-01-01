const { Driver, Teams } = require("../db");
const axios = require("axios");

const getDriversDb = async () => {
  const allDrivers = await Driver.findAll({
    include: [
      {
        model: Teams,
        attributes: ["name"],
        through: { attributes: [] }, // To exclude unnecessary attributes from the join table
      },
    ],
  });
  return allDrivers;
};

const getDriversApi = async () => {
  // Adjust the API endpoint and parameters according to your needs
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
    id: dbDriver.ID,
    name: `${dbDriver.name} ${dbDriver.surname}`, 
    image: dbDriver.image.url,          
    dob: dbDriver.dob,
    nationality: dbDriver.nationality,
    // teams: dbDriver.Teams.map((t) => t.name),
    description: dbDriver.description,
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
