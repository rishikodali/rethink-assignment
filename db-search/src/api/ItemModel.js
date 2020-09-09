const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ItemModel = mongoose.model('item', ItemSchema);

module.exports = ItemModel;
