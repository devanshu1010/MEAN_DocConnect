const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect( process.env.mongoURI, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log("hello");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;