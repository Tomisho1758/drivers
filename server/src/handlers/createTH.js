// En el archivo teamsHandler.js
const createTeam = require('../controllers/createT'); // Asegúrate de tener el módulo createTeam correctamente importado

const createTeamHandler = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await createTeam(name);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createTeamHandler,
};
