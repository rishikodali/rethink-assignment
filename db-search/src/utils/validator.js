/* eslint-disable no-useless-escape */
const Joi = require('joi');

const validateSearch = (search, page, limit) => {
  const value = {
    search,
    page,
    limit,
  };

  const schema = Joi.object({
    search: Joi.string().max(255),
    page: Joi.number().min(0),
    limit: Joi.number().min(0),
  });

  return schema.validate(value);
};

module.exports = {
  validateSearch,
};
