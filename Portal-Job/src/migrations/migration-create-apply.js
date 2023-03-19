'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CV: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      recruId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Recruitments",
        //   key: "id",
        // },
      },
      candId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Candidates",
        //   key: "id:",
        // },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applies');
  }
};