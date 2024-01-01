const { Teams } = require("../db");

module.exports = async (name) => {
  try {
    const newTeam = await Teams.create({
      name,
    });

    return {
      message: "Team successfully created",
      new_Team: newTeam,
    };
  } catch (error) {
    throw error;
  }
};
