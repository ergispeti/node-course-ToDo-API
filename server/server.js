var {mongoose} = require('./db/mongoose.js');
var {ToDo} = require('./models/ToDo.js');
var {Users} = require('./models/users.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new ToDo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(8080 , () => {
  console.log('Started on port 8080');
});
