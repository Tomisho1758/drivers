const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  const Teams = sequelize.define('teams', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    } ,
    id: {
      type: DataTypes.INTEGER,
      
      primaryKey: true,
      autoIncrement:true
    }
   
  }, { timestamps: false });

  return Teams;
};
