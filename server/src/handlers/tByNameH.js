const getTeamByName = require('../controllers/tByName'); // Asegúrate de tener la ruta correcta

const getTeamByNameHandler = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ error: 'Name parameter is missing' });
    }

    const teams = await getTeamByName(name);

    if (teams.length === 0) {
      return res.status(404).json({ message: 'No teams found with the provided name' });
    }

    return res.status(200).json(teams);
  } catch (error) {
    console.error('Error in getTeamByNameHandler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getTeamByNameHandler;
