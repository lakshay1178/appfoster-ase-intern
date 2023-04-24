
'use strict';

const {sequelize} = require(".")

module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
      userId:{
        type: Sequelize.INTEGER
      },
      projectTitle: {
        type: Sequelize.STRING
      },
      projectDescription: {
        type: Sequelize.STRING
      }
    });
  
    return Project;
  };
  
  
  
  
  
