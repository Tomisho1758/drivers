const axios = require("axios");
const { Teams } = require("../db");
const { getTeamsDb } = require("./getAllTeams");

const getTeamByName = async (name) => {
  try {
    

    // Verificar si name es undefined o null
    if (name === undefined || name === null) {
      throw new Error('Name is undefined or null');
    }

    // Obtener todos los equipos de la base de datos
    const dbTeams = await getTeamsDb();

    // Filtrar los equipos cuyos nombres sean similares al término de búsqueda
    const filteredTeams = dbTeams.filter((team) =>
      team.name.toLowerCase().includes(name.toLowerCase())
    );

    // Si se encuentran equipos que coincidan con el término de búsqueda, retornarlos
    if (filteredTeams.length > 0) {
      
      return filteredTeams;
    }

    
    // Puedes manejar la lógica para devolver un mensaje o realizar otra acción aquí

    return [];
  } catch (error) {
    console.error('Error en getTeamByName:', error);
    throw error;
  }
};

module.exports = getTeamByName;
