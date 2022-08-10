'use strict';
const { v4 : uuidv4 }= require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
       // defaultValue:()=> uuidv4(),
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(5,4)
      },
      daysLow: {
        type: Sequelize.DECIMAL(5,4)
      },
      daysHigh: {
        type: Sequelize.DECIMAL(5,4)
      },
      fiftyLow: {
        type: Sequelize.DECIMAL(5,4)
      },
      fiftyHigh: {
        type: Sequelize.DECIMAL(5,4)
      },
      previousClose: {
        type: Sequelize.DECIMAL(5,4)
      },
      open: {
        type: Sequelize.DECIMAL(5,4)
      },
      date:{
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stocks');
  }
};