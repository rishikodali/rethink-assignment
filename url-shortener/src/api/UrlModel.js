const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const UrlModel = mongoose.model('url', UrlSchema);

module.exports = UrlModel;
