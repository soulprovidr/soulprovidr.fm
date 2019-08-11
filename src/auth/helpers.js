const bcrypt = require('bcrypt');

exports.authenticate = async function (plaintextPassword, hash) {
  try {
    return await bcrypt.compare(plaintextPassword, hash);
  } catch (e) {
    throw e;
  }
};

exports.hashPassword = async function (plaintextPassword){
  try {
    return await bcrypt.hash(plaintextPassword, 10);
  } catch (e) {
    throw e;
  }
};