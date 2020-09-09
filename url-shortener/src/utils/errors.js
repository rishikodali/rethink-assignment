/* eslint-disable max-classes-per-file */
class ClientError extends Error {
  constructor(name, statusCode, message, data) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    Error.captureStackTrace(this, this.Error);
  }
}

class ServerError extends Error {
  constructor(message = 'Something went wrong') {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = 500;
    Error.captureStackTrace(this, this.Error);
  }
}

module.exports = {
  ClientError,
  ServerError,
};
