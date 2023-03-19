'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsToMany(models.Recruitment, { foreignKey: 'recruId', through: 'SkillRecruitment' });
    }
  };
  Skill.init({
    skillName: DataTypes.STRING,
    recruId: {
      type: DataTypes.INTEGER,
      //   references: {
      //     model: "Recruitments",
      //     key: "id:",
      //   },
    },

  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};