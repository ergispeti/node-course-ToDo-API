const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if(err){
     return console.log('Unable to connect to MongoDB server');
   }
     console.log('Connected to MongoDB server');

    //  db.collection('ToDos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    //  }, (err, result) => {
    //    if(err) {
    //      return console.log('Unable to insert ToDos', err);
    //    }
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    //  })

    db.collection('Users').insertOne({
      Name: 'Ergis Peti',
      age: 23,
      location: 'Tirana,Albania'
    }, (err, result) => {
      if(err) {
        return console.log('Unable to insert ToDos', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

     db.close();
});
