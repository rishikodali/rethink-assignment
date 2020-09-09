const logger = require('./logger');
const { ClientError } = require('./errors');

const handleError = (err, req, res, next) => {
  const { name, statusCode, message, data } = err;

  if (err instanceof ClientError) {
    logger.warn(`${name} [${statusCode}]: ${message}: ${data}`);
  } else {
    logger.error(`${name} [${statusCode}]: ${message}\n${err.stack}`);
  }

  res.status(statusCode).json({
    error: name,
    statusCode,
    message,
  });
  next();
};

module.exports = handleError;
