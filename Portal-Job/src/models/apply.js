'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Apply.belongsTo(models.Candidate, { foreignKey: 'candId' })
      Apply.belongsTo(models.Recruitment, { foreignKey: 'recruId' })
    }
  };
  Apply.init({
    CV: DataTypes.STRING,
    desc: DataTypes.TEXT,
    recruId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Recruitments",
      //   key: "id:",
      // },
    },
    candId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Candidates",
      //   key: "id:",
      // },
    },

  }, {
    sequelize,
    modelName: 'Apply',
  });
  return Apply;
};