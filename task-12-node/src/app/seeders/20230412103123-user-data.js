

'use strict';

const hoaxer = require("hoaxer");
const {User, Project} = require("../models");

const user = [];
const project = [];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    for(let i=0;i<2;i++){
      user.push({
        name:hoaxer.lorem.words(),
        email:hoaxer.lorem.words(),

        createdAt:new Date(),
        updatedAt : new Date()
      })
    }
    await queryInterface.bulkInsert('Users', user);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
