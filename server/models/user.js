var mongoose = require('mongoose');

// User model
// email property - required, trimmed, string, minlength
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  }
});

module.exports = {User};
