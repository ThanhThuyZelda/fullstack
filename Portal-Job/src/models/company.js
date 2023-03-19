
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.Recruitment, { foreignKey: 'compId' })
      Company.hasMany(models.Employer, { foreignKey: 'compId' })
      Company.belongsTo(models.Location, { foreignKey: 'locatId' })
    }
  };
  Company.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING,
    scale: DataTypes.STRING,
    locatId: {
      type: DataTypes.INTEGER,
      //   references: {
      //     model: "Locations",
      //     key: "id:",
      //   },
    },
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};