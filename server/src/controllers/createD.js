const { Driver, Teams } = require("../db");

const createDriver = async (name, image, teams, description, nationality, dob) => {
  try {
    // Busca equipos por sus IDs
    
    const teamIds = Array.from(teams, (id) => Number(id));
const existingTeams = await Teams.findAll({ where: { id: teamIds } });


    
    // Verifica si todos los IDs de equipos especificados están presentes en la respuesta
    const teamIdsFound = existingTeams.map((team) => team.id);

    const teamsNotFound = teams.filter((teamId) => !teamIdsFound.includes(teamId));

    console.log('existingTeams:', existingTeams);
    console.log('teams:', teams);

    if (teamsNotFound.length > 0) {
      console.error(`Teams with IDs [${teamsNotFound.join(', ')}] not found`);
      console.error('Existing teams:', existingTeams);
      console.log('teamsNotFound:', teamsNotFound); // Agrega esta línea
      throw new Error(`Teams with IDs [${teamsNotFound.join(', ')}] not found`);
    }
    

    const newDriver = await Driver.create({
      name, image, description, nationality, dob, teams: teamIds
    });
    

    // Asocia los equipos al nuevo conductor
    await newDriver.addTeams(existingTeams);

    return {
      message: "Driver successfully created",
      new_Driver: newDriver,
    };
  } catch (error) {
    console.error("Error in createD.js:", error);
    throw error;
  }
};

module.exports = createDriver;
