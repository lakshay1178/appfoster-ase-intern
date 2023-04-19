module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
      projectTitle: {
        type: Sequelize.STRING
      },
      projectDescription: {
        type: Sequelize.STRING
      }
    });
  
    return Project;
  };
  
  
  
  
  
