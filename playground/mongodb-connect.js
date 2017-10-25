//const MongoClient = require('mongodb').MongoClient;

//Uses object destructuring
const {MongoClient, ObjectID} = require('mongodb');

//ES6 object destructuring lets you pull out properties from an object - creating variable
// var user = {name: 'Corey', age: 31};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    //return
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     //shows error
  //     return console.log('Unable to insert todo', err);
  //   }
  //   //shows inserted document
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into the Users collection - name, age, location
  // db.collection('Users').insertOne({
  //   name: 'Corey',
  //   age: 31,
  //   location: 'Pennsylvania'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user.', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  //Closes connection with mongodb server
  db.close();
});
