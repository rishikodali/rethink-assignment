/* eslint-disable no-useless-escape */
const Joi = require('joi');

const urlRegex = /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.+)?$/;

const validateShortUrl = (shortUrl) => {
  const value = {
    shortUrl,
  };

  const schema = Joi.object({
    shortUrl: Joi.string().required().length(7),
  });

  return schema.validate(value);
};

const validateUrl = (originalUrl) => {
  const value = {
    originalUrl,
  };

  const schema = Joi.object({
    originalUrl: Joi.string().required().pattern(urlRegex, 'url'),
  });

  return schema.validate(value);
};

const validateCustomUrl = (originalUrl, customUrl) => {
  const value = {
    originalUrl,
    customUrl,
  };

  const schema = Joi.object({
    originalUrl: Joi.string().pattern(urlRegex, 'url').required(),
    customUrl: Joi.string().uri(urlRegex, 'url').required(),
  });

  return schema.validate(value);
};

module.exports = {
  validateUrl,
  validateShortUrl,
  validateCustomUrl,
};
