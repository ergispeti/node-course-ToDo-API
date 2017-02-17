const mongoose = require ('mongoose');


var Users = mongoose.model('Users', {
  email : {
     type: String,
     required: true,
     minlength: 1,
     trim: true,
     validate: {
          validator: (value) => {
            return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
          }
  }
}
});

module.exports = {Users};
