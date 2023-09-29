const mongoose = require('mongoose');
const Dog = require('./models/Dog');
const DATABASE_NAME = 'DogsDB';

const CONNECTION_STR = 'mongodb://127.0.0.1:27017/DogsDB';

async function connectDb() {
  await mongoose.connect(CONNECTION_STR);
  console.log(`Connected to database ${DATABASE_NAME}...`);

  // * Static, virtual, methods
  // const dogs = await Dog.find();
  // dogs.forEach((dog) => dog.bark());
  // dogs.forEach((dog) => console.log(dog.description));
  // const d = await Dog.getDogsCollection();
  // console.log(d);

  // * CREATE

  // * READ

  // * UPDATE

  // * DELETE

};

connectDb();