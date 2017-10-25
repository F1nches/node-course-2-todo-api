//const MongoClient = require('mongodb').MongoClient;

//Uses object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    //return
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59f03a1adb47be0670d2f4e7')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59eff928c7656a4a28b557ef')
  }, {
    $set: {
      name: 'Corey'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
}).then((result) => {
  console.log(result);
});


  //Closes connection with mongodb server
  //db.close();
});
