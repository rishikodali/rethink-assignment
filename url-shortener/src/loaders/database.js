const mongoose = require('mongoose');

const { MONGO_URI } = require('../config/env');
const logger = require('../utils/logger');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, options);
    logger.info('Connected to Database');
  } catch (err) {
    logger.error('Could not connect to Database', err);
  }
};

module.exports = connectDB;
