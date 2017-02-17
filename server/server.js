var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/ToDo');
var {User} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new ToDo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
    ToDo.find().then((todos) => {
      res.send({
        todos: todos
      });
    }, (e) => {
    res.status(400).send(e);
    });
});

app.listen(8080, () => {
  console.log('Started on port 8080');
});

module.exports = {app};
