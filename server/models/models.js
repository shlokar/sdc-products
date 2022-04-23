let db = require('../db/db.js');

const readAllProducts = (page, count) => {
  const text = 'select * from products offset $1 limit $2';
  const values = [(count * (page - 1)), count];
  return db.query(text, values);
}

module.exports = { readAllProducts };
