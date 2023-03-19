'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recruitments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      request: {
        type: Sequelize.TEXT
      },
      interest: {
        type: Sequelize.TEXT
      },
      compId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Company",
        //   key: "id",
        // },
      },
      fieldId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Fields",
        //   key: "id",
        // },
      },
      posId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Positions",
        //   key: "id",
        // },
      },
      skillId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Skills",
        //   key: "id",
        // },
      },
      WFormId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Workforms",
        //   key: "id",
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
    await queryInterface.dropTable('Recruitments');
  }
};