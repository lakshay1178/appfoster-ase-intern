module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
   router.post("/add", users.create);

  // Retrieve all Users

  
  router.get("/users", users.findAll);

  
  

  router.get("/:id", users.findOne);
  
  // Retrieve a single User with id

  // Update a User with id
  router.put("/users/:id", users.update);

  // Delete a User with id
  router.delete("/users/:id", users.delete);

  // Delete all Users
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};



