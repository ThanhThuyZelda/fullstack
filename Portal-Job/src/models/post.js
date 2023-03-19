'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Manager, { foreignKey: 'mangId' })
    }
  };
  Post.init({
    title: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING,
    content: DataTypes.TEXT,
    mangId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Managers",
        key: "id:",
      },
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};