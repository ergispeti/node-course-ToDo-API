var env = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.NODE_ENV || 'development';
console.log('env ------ ', env);

if(env === 'development'){
  process.env.PORT = 8080;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoApp';
} else if (env === 'test'){
  process.env.PORT = 8080;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoAppTest';
}
