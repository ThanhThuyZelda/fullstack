'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recruitment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recruitment.hasMany(models.Apply, { foreignKey: 'recruId' })
      Recruitment.belongsTo(models.Workform, { foreignKey: 'WFormId' })
      Recruitment.belongsTo(models.Field, { foreignKey: 'fieldId' })
      Recruitment.belongsTo(models.Position, { foreignKey: 'posId' })
      Recruitment.belongsTo(models.Company, { foreignKey: 'compId' })
      Recruitment.belongsToMany(models.Skill, { foreignKey: 'skillId', through: 'SkillRecruitment' });
    }
  };
  Recruitment.init({
    title: DataTypes.STRING,
    deadline: DataTypes.STRING,
    salary: DataTypes.STRING,
    gender: DataTypes.STRING,
    amount: DataTypes.STRING,
    desc: DataTypes.TEXT,
    request: DataTypes.TEXT,
    interest: DataTypes.TEXT,
    compId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Companies",
      //   key: "id:",
      // },
    },
    fieldId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Fields",
      //   key: "id:",
      // },
    },
    posId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Positions",
      //   key: "id:",
      // },
    },
    skillId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Skills",
      //   key: "id:",
      // },
    },
    WFormId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Workforms",
      //   key: "id:",
      // },
    },
  }, {
    sequelize,
    modelName: 'Recruitment',
  });
  return Recruitment;
};