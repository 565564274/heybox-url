// import { createHash, createHmac } from 'node:crypto';
const { createHash, createHmac } = require('node:crypto');
// import struct from 'python-struct';
const struct = require('python-struct');

const md5 = (str) => {
  const h = createHash('md5');
  h.update(str);
  return h.digest();
};

const sha1 = (str) => {
  const h = createHash('sha1');
  h.update(str);
  return h.digest();
};

const sha1HMAC = (secret, timestamp) => {
  const h = createHmac('sha1', secret);
  h.update(struct.pack('>Q', [timestamp]));
  return h.digest();
};

module.exports = { md5 , sha1, sha1HMAC };


