const dateformat = require('dateformat');
const mongoose = require('mongoose');

var randomDate = new Date();


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
  scheduledAt: {
    type: String,
    default: dateformat(randomDate, `dddd, mmmm dS, yyyy, h:MM:ss TT`)
  }
});

module.exports = {ToDo};
