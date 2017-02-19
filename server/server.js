var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/ToDo');
var {User} = require('./models/users');

var app = express();
const port = process.env.PORT || 8080;

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

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

   if (!ObjectID.isValid(id)){
     return res.status(404).send();
   }
   else{
    ToDo.findById(id).then((todo) => {
      if(!todo)
      return res.status(404).send();

      res.send({
        todo: todo
      });
    }, (e) => {
      res.status(400).send();
    }).catch((e) => {
      res.status(400).send();
    });
   }
});

app.delete('/todos/:id', (req,res) => {
  var id = req.params.id;

   if (!ObjectID.isValid(id)){
     return res.status(404).send('The id is invalid!');
   }
   else{
    ToDo.findByIdAndRemove(id).then((todo) => {
      if(!todo)
      return res.status(404).send();

      res.send({
        todo: todo
      });
    }, (e) => {
      res.status(400).send();
    }).catch((e) => {
      res.status(400).send();
    });
   }
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
