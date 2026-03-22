const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/toposel';
  try {
    await mongoose.connect(uri);
    console.log(`Mongo connected: ${uri}`);
  } catch (err) {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
