const express = require('express');

const UrlService = require('./UrlService');
const { ClientError, ServerError } = require('../utils/errors');

const UrlController = express.Router();

UrlController.get('/:shortUrl', async (req, res, next) => {
  try {
    const { shortUrl } = req.params;
    const result = await UrlService.getUrl(shortUrl);

    res.redirect(result);
  } catch (err) {
    if (err instanceof ClientError) next(err);
    else throw new ServerError();
  }
});

UrlController.post('/', async (req, res, next) => {
  try {
    const { originalUrl, customUrl } = req.body;
    const result = await (customUrl
      ? UrlService.createCustomUrl(originalUrl, customUrl)
      : UrlService.createUrl(originalUrl));
    res.send(result);
  } catch (err) {
    if (err instanceof ClientError) next(err);
    else throw new ServerError();
  }
});

module.exports = UrlController;
