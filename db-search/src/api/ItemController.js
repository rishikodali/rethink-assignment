const express = require('express');

const ItemService = require('./ItemService');
const { ClientError, ServerError } = require('../utils/errors');

const ItemController = express.Router();

ItemController.get('/', async (req, res, next) => {
  try {
    const { search } = req.body;
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const result = await ItemService.getItems(search, page, limit);

    res.json(result);
  } catch (err) {
    if (err instanceof ClientError) next(err);
    else throw new ServerError();
  }
});

module.exports = ItemController;
