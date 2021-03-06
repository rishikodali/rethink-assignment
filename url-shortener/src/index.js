const express = require('express');

const { PORT } = require('./config/env');
const logger = require('./utils/logger');
const handleError = require('./utils/handleError');

const app = express();

require('./loaders/express')(app);
require('./loaders/database')();
require('./loaders/route')(app);

const server = app.listen(PORT, logger.info('Server started on port 3000'));

app.use(handleError);

module.exports = server;
