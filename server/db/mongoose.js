// Require mongoose
var mongoose = require('mongoose');

// Use built-in promise library
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

//export mongoose variable for use elsewhere
module.exports = {mongoose};
