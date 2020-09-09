const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT) || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  BASE_URL: process.env.BASE_URL || 'localhost:3000',
};
