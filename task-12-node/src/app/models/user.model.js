
'use strict';

const {sequelize} = require(".")


module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      userId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  