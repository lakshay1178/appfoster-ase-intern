'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    for(let i=0;i<2;i++){
      projects.push({
        id:
        name:hoaxer.lorem.words(),
        email:hoaxer.lorem.words(),

        createdAt:new Date(),
        updatedAt : new Date()
      })
    }
    await queryInterface.bulkInsert('projects', user);

  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('projects', null, {});
  }
};
