const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if(err){
     return console.log('Unable to connect to MongoDB server');
   }
     console.log('Connected to MongoDB server');

    //  db.collection('ToDos').findOneAndUpdate({
    //   _id: new ObjectID ('58a2c61510e52752f45c2c7d')
    //  },{
    //    $set: {
    //      completed: true
    //    }
    //  },{
    //    returnOriginal: false
    //  }).then((result) => {
    //    console.log(result);
    //  });

     db.collection('Users').findOneAndUpdate({
      Name: 'Ergis Peti'
     },{
       $set: {
         Name: 'Ergis'
       },
       $inc: {
         age: -1
       }
     },{
       returnOriginal: false
     }).then((result) => {
       console.log(result);
     });

    //  db.close();
});
