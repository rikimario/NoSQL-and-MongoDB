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
  // * Variant 1
  // const newDog = new Dog({ name: 'Lisko', age: 4, color: 'Orange' });
  // newDog.save();
  // * Variant 2
  // const newDog = await Dog.create({ name: 'Tom', age: 8, color: 'sharen' })
  // console.log(newDog);

  // * READ
  const dogs = await Dog.find();
  // const dogs = await Dog.find({ color: 'pink' });
  // const DOG_ID = '6515a4ca3de49bca9b242e8b';
  // const dogs = await Dog.findById(DOG_ID);
  // const dogs = await Dog.findOne();


  // * UPDATE
  // const DOG_ID = '651829a758a3cdde577d0c91';
  // * Variant 1
  // const updateDog = await Dog.updateOne({ name: 'Tom' }, { $set: { color: 'red' } }); // $ -> mongodb syntax
  // console.log(updateDog);
  // * Variant 2
  // const DOG_ID = '651829a758a3cdde577d0c91';
  // const dog = await Dog.findById(DOG_ID);
  // dog.age = -3;
  // dog.color = 'transparent';
  // dog.save();
  // * Variant 3
  // await Dog.findByIdAndUpdate(DOG_ID, { age: 50 });

  // * DELETE
  // * Variant 1
  // await Dog.deleteOne({ name: 'Tom' })
  // * Variant 2
  // const DOG_ID = '651828d2b236421a5cf323de';
  // await Dog.findByIdAndDelete(DOG_ID)


  console.log(dogs);
};

connectDb();

// * FROM THE DB
// const DB_DOGS = [
//   {
//     _id: '6515a5133de49bca9b242e8c',
//     name: "Johnny",
//     age: 1,
//     color: "black",
//   },
//   {
//     _id: '6515a5133d149bca9b242e8c',
//     name: "Roshko",
//     age: 5,
//     color: "black",
//   },
//   {
//     _id: '6515a5133de49bca9b142e8c',
//     name: "Rex",
//     age: 3,
//     color: "black",
//   },

// ];

// // * THEN WHEN THEY ARE FETCHED, THEY ARE MAPPED WITH THE SCHEMA
// const transformDbDogs = DB_DOGS.map((dog) => {
//   return {
//     ...dog,
//     getDescription: function () {
//       // console.log(this);
//       return `This dog is called ${this.name}!`;
//     },
//   }
// });

// // * when all ready
// transformDbDogs.forEach((dog) => console.log(dog.getDescription()));