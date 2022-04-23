let db = require('../db/db.js');

const queryTest = () => {
  return db.query(`select name from products where id = 1`,
  )
};

module.exports.queryTest = queryTest;
