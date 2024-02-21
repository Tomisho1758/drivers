
const createTeam = require('../controllers/createT'); 

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
