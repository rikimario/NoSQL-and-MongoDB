const mongoose = require('mongoose');
const Dog = require('./models/Dog');


const CONNECTION_STR = 'mongodb://127.0.0.1:27017/DogsDB';

async function connectDb() {
  mongoose.connect(CONNECTION_STR);

  const dogs = await Dog.find();
  console.log(dogs);
}
connectDb();