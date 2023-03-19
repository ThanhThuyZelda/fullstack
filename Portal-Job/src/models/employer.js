'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employer.belongsTo(models.Company, { foreignKey: 'compId' })
    }
  };
  Employer.init({
    fullName: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    position: DataTypes.STRING,
    img: DataTypes.STRING,
    compId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Companies",
        key: "id:",
      },
    },
  }, {
    sequelize,
    modelName: 'Employer',
  });
  return Employer;
};