const ItemModel = require('./ItemModel');

const ItemRepository = {
  getItems: async (search, skip, limit) => {
    const searchRegex = new RegExp(`${search}`);

    const items = await ItemModel.aggregate([
      { $match: { name: { $regex: searchRegex } } },
      { $sort: { _id: -1 } },
      { $skip: skip },
      { $limit: limit },
    ]);

    return items;
  },
};

module.exports = ItemRepository;
