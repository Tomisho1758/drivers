// En tu archivo ../db/models/driver.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  const Driver = sequelize.define('Driver', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      defaultValue: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/03/16568610095814.jpg',
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    },
  });

  // Las relaciones irían aquí si las necesitas

  return Driver;
};
