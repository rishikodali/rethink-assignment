const { customAlphabet } = require('nanoid');

const generateCode = (size = 7) => {
  const BASE_62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(BASE_62, size);

  return nanoid();
};

module.exports = generateCode;
