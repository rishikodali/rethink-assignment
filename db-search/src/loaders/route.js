const ItemController = require('../api/ItemController');

module.exports = (app) => {
  app.use('/', ItemController);
};
