const { Driver, Teams } = require("../db");

const createDriver = async (name, image,teams, description,nationality, dob,) => {
  try {

    const teamArray = Array.isArray(teams) ? teams : [teams];


    const teamIds = teamArray.map((id) => Number(id)).filter((id) => !isNaN(id));

    const existingTeams = await Teams.findAll({ where: { id: teamIds } });

  
    const teamIdsFound = existingTeams.map((team) => team.id);

    const teamsNotFound = teamArray.filter((teamId) => !teamIdsFound.includes(teamId));

    console.log('existingTeams:', existingTeams);
    console.log('teamArray:', teamArray);

    if (teamsNotFound.length > 0) {
      console.error(`Teams with IDs [${teamsNotFound.join(', ')}] not found`);
      console.error('Existing teams:', existingTeams);
      console.log('teamsNotFound:', teamsNotFound); 
      throw new Error(`Teams with IDs [${teamsNotFound.join(', ')}] not found`);
    }

    const newDriver = await Driver.create({
      name, image, teams: teamIds,  description, nationality, dob,
    });

  
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

