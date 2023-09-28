const mongoose = require('mongoose');

// Schema
const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;