const axios = require("axios");
const { Teams } = require("../db");
const { getTeamsDb } = require("./getAllTeams");

const getTeamByName = async (name) => {
  try {
    

    
    if (name === undefined || name === null) {
      throw new Error('Name is undefined or null');
    }

    
    const dbTeams = await getTeamsDb();

    
    const filteredTeams = dbTeams.filter((team) =>
      team.name.toLowerCase().includes(name.toLowerCase())
    );

    
    if (filteredTeams.length > 0) {
      
      return filteredTeams;
    }

    
    

    return [];
  } catch (error) {
    console.error('Error en getTeamByName:', error);
    throw error;
  }
};

module.exports = getTeamByName;
