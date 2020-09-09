const UrlController = require('../api/UrlController');

module.exports = (app) => {
  app.use('/', UrlController);
};
