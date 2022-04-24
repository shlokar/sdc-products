let db = require('../db/db.js');

const readAllProducts = (page, count) => {
  const text = 'SELECT * FROM products OFFSET $1 LIMIT $2';
  const values = [(count * (page - 1)), count];
  return db.query(text, values);
}

const readProductInfo = (product_id) => {
  const query = `
    SELECT
      p.id,
      p.name,
      p.slogan,
      p.description,
      p.category,
      p.default_price,
      (SELECT json_agg(
        json_build_object(
          'feature', f.feature,
          'value', f.value)
        )
        FROM features f
        WHERE f.product_id = p.id
      ) features
    FROM products p
    WHERE p.id = ${product_id}
  `;
  return db.query(query);
}

module.exports = { readAllProducts, readProductInfo };
