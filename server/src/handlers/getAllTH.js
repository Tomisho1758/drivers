const { getTeamsDb } = require("../controllers/getAllTeams");

const getTeamsHandler = async (req, res) => {
  try {
    const teams = await getTeamsDb();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTeamsHandler,
};
