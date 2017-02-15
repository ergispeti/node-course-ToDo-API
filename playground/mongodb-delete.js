const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if(err){
     return console.log('Unable to connect to MongoDB server');
   }
     console.log('Connected to MongoDB server');

     db.collection('ToDos').deleteMany({
       text: 'Eat lunch'
     }).then((result) => {
       console.log(result);
     });

    //  db.close();
});
