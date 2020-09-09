const UrlModel = require('./UrlModel');

const UrlRepository = {
  getUrl: async (shortUrl) => {
    const url = await UrlModel.findOne({ shortUrl });

    return url;
  },

  createUrl: async (originalUrl, shortUrl) => {
    const url = await UrlModel.findOne({ shortUrl });
    if (url) return null;

    const newUrl = await UrlModel.create({
      shortUrl,
      originalUrl,
    });

    return newUrl;
  },
};

module.exports = UrlRepository;
