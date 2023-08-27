'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superhumans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        type: Sequelize.STRING,
        field: 'nick_name',
        allowNull: false
      },
      realName: {
        type: Sequelize.STRING,
        field: 'real_name',
        allowNull: false
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: 'origin_description',
        allowNull: false
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: 'catch_phrase',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superhumans');
  }
};