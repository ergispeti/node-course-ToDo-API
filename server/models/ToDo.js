const dateformat = require('dateformat');
const mongoose = require('mongoose');


var ToDo = mongoose.model('ToDo', {
  text : {
     type: String,
     required: true,
     minlength: 1,
     trim: true
  },
  completed: {
     type: Boolean,
     default: false
  },
  completedAt: {
    type: String,
    default: null
  }
});

module.exports = {ToDo};
