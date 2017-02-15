const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if(err){
     return console.log('Unable to connect to MongoDB server');
   }
     console.log('Connected to MongoDB server');

     db.collection('ToDos').find({completed: false}).toArray().then((docs) => {
          console.log('ToDos');
          console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
       console.log('Unable to fetch data', err);
     });

     db.close();
});
