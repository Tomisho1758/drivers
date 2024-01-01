const { getDriverById } = require("../controllers/dById");

const getDriverByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getDriverById(id);

    if (!result) {
      res.status(404).json({ error: "Driver not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error("Error in getDriverByIdHandler:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getDriverByIdHandler,
};
