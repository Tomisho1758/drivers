const { Teams } = require("../db");
const axios = require("axios");


const getTeamsDb = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/drivers`);
    const drivers = response.data;

    // Extraer todos los equipos de todos los conductores
    const allTeams = drivers.reduce((teams, driver) => {
      const driverTeams = driver.teams ? driver.teams.split(',').map((team) => team.trim()) : [];
      return teams.concat(driverTeams);
    }, []);

    // Eliminar duplicados
    const uniqueTeams = [...new Set(allTeams)];

    // Obtener los equipos de la base de datos
    const teamsFromDb = await Promise.all(uniqueTeams.map(async (teamName) => {
      const [team] = await Teams.findOrCreate({
        where: { name: teamName },
        
      });
      return team;
    }));

   
    
    return teamsFromDb;
  } catch (error) {
    console.error('Error fetching teams:', error.message);
    throw error;
  }
};

module.exports = {
  getTeamsDb,
};
