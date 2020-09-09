const bodyParser = require('body-parser');
require('express-async-errors');

module.exports = (app) => {
  app.use(bodyParser.json());
};
