const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = process.env.MONGOURL_LOCAL;
const mongoURL = process.env.MONGOURL;

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to mongoDB server');
});

db.on('error', (err) => {
  console.log('mongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('mongoDB Disconnected');
});

module.exports = db;
