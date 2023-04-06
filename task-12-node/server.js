
const express = require('express')
const app = express()


const fs = require("fs")
const port = 5000;

const cors = require("cors");
app.use(cors())

const userData = require("./userData/userData.json")


app.get('/', (req, res) => {
  res.send("Hello Hello Hellooo Welcome to user search API")
})

app.get('/users', (req, res) => {
  res.send(userData)
})


app.get(`/users/:id/projects`, (req, res) => {
  var id = req.params.id;

  const d = id.split(':')[1];

  let obj = userData.find(item => item.id == d).projects


  console.log(d)
  console.log(obj)
  res.send(obj)


})



app.get(`/users/:id/delete`, (req, res) => {
  var id = req.params.id;

  const d = id.split(':')[1];

  let obj = userData.find(item => item.id == d)

  const index = userData.indexOf(obj);

  console.log(index)

  if (userData.includes(obj)) {

    const s = userData.splice(index, 1);
  }

  res.send(userData)

})



app.get(`/users/create/`, (req, res) => {
  let { id, name, email, gender, status, projects } = req.query;
  const newUser = { id, name, email, gender, status, projects };

  const userData = JSON.parse(fs.readFileSync('./userData/userData.json', 'utf8'));


  userData.push(newUser);


  fs.writeFileSync('./userData/userData.json', JSON.stringify(userData));

  res.send(userData);

})



app.get(`/users/update/`, (req, res) => {
  // let { id, name, email, gender, status, projects } = req.query;
  // const newUser = {id, name, email, gender, status, projects};

  // const userData = JSON.parse(fs.readFileSync('./userData/userData.json', 'utf8'));

  // userData.push(newUser);


  // fs.writeFileSync('./userData/userData.json', JSON.stringify(userData));

  // res.send(userData);


  const { id } = req.query;
  const queryParamName = Object.keys(req.query)[1]; // get the second query parameter (i.e. the name of the property to update)
  const queryParamValue = req.query[queryParamName];

  // read the existing users from JSON file
  const userData = JSON.parse(fs.readFileSync('./userData/userData.json', 'utf8'));

  // find the user with the given ID
  const userToUpdate = userData.find((user) => user.id === id);

  if (userToUpdate) {
    // update the property of the user based on the query parameter name
    if (queryParamName === 'name') {
      userToUpdate.name = queryParamValue;
    }
    else if (queryParamName === 'project') {
      userToUpdate.projects = queryParamValue;
    }
    else if (queryParamName === 'gender') {
      userToUpdate.gender = queryParamValue;
    } else if (queryParamName === 'status') {
      userToUpdate.status = queryParamValue;
    } else if (queryParamName === 'email') {
      userToUpdate.email = queryParamValue;
    }

    // write the updated JSON file back to disk
    fs.writeFileSync('./userData/userData.json', JSON.stringify(userData));

    // send a response to the client
    res.send(`${queryParamName} updated successfully for user with ID ${id}`);
  }



})

// http://localhost:5000/users/create?id=244&name=Lakshay&email=lak&gender=male&status=male&projects=React+Music



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})