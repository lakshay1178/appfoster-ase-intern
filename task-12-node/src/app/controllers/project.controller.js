const db = require("../models");
const Project = db.projects;
const Op = db.Sequelize.Op;

// Create and Save a new Project
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  // Create a Project
  const project = {
    name: req.body.name,
    userid:req.body.userid,
    description:req.body.description
    
  };

  // Save Project in the database
  Project.create(project)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project."
      });
    });
};

// Retrieve all projects from the database and render them in a view
exports.showAll = (req, res) => {
  Project.findAll()
    .then(projects => {
      res.render('projects', { projects }); // Assuming you have a view named "projects" for rendering projects
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving projects."
      });
    });
};


// Find a single Project with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Project.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Project with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });
};

// Update a Project by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Project.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Project with id=${id}. Maybe Project was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Project with id=" + id
      });
    });
};

// Delete a Project with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Project.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Project with id=${id}. Maybe Project was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Project with id=" + id
      });
    });
};

// Delete all projects from the database.
exports.deleteAll = (req, res) => {
    Project.destroy({
      where: {},
    })
      .then(num => {
        res.send({ message: `${num} Users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message: err
        });
      });
  };
  
  // Find all Projects belonging to a user with the specified id
exports.findAllByUser = (req, res) => {
    const userid = req.params.id;
  
    Project.findAll({ where: { userid: userid } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || `Error retrieving Projects for user with id=${userid}`
        });
      });
  };