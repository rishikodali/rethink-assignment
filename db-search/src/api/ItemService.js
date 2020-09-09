const ItemRepository = require('./ItemRepository');
const { validateSearch } = require('../utils/validator');
const { ClientError } = require('../utils/errors');

const ItemService = {
  getItems: async (search, page, limit) => {
    const { error } = validateSearch(search, page, limit);
    if (error)
      throw new ClientError('BadRequestError', 400, 'Invalid search', error.details[0].message);

    const skip = (page - 1) * limit;
    const items = await ItemRepository.getItems(search, skip, limit);
    const result = {
      data: items,
      pagination: {
        page,
        limit,
      },
    };
    return result;
  },
};

module.exports = ItemService;
