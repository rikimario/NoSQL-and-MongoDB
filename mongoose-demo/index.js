const mongoose = require('mongoose');
const CONNECTION_STR = 'mongodb://127.0.0.1:27017/DogsDB';

async function connectDb() {
  mongoose.connect(CONNECTION_STR);
}
connectDb();