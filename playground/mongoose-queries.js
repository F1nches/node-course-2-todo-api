const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59f1882582b579640f7e949e11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todo find one', todos);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

//User.findById
var userId = '59f232b7131f5d5c2225b26c';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log('User by id: ', user);
}).catch((e) => console.log(e));
