const UrlRepository = require('./UrlRepository');

const { BASE_URL } = require('../config/env');
const { ClientError } = require('../utils/errors');
const generateCode = require('../utils/generateCode');
const { validateUrl, validateShortUrl, validateCustomUrl } = require('../utils/validator');

const UrlService = {
  getUrl: async (shortUrl) => {
    const { error } = validateShortUrl(shortUrl);
    if (error) throw new ClientError('BadRequestError', 400, 'Invalid URL');

    const url = await UrlRepository.getUrl(shortUrl);
    if (!url) throw new ClientError('NotFoundError', 404, 'URL not found');

    const result = url.originalUrl;
    return result;
  },

  createUrl: async (originalUrl) => {
    const { error } = validateUrl(originalUrl);
    if (error)
      throw new ClientError('BadRequestError', 400, 'Invalid URL', error.details[0].message);

    const code = generateCode();
    const url = await UrlRepository.createUrl(originalUrl, code);
    if (!url) this(originalUrl);

    const result = {
      shortUrl: `${BASE_URL}/${url.shortUrl}`,
      originalUrl,
    };
    return result;
  },

  createCustomUrl: async (originalUrl, customUrl) => {
    const { error } = validateCustomUrl(originalUrl, `${BASE_URL}/${customUrl}`);
    if (error)
      throw new ClientError('BadRequestError', 400, 'Invalid URL', error.details[0].message);

    const url = await UrlRepository.createUrl(originalUrl, customUrl);
    if (!url) throw new ClientError('BadRequestError', 400, 'Custom URL already taken');

    const result = {
      shortUrl: `${BASE_URL}/${customUrl}`,
      originalUrl,
    };
    return result;
  },
};

module.exports = UrlService;
