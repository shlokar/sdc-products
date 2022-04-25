let db = require('../db/db.js');

const readAllProducts = (page, count) => {
  const text = 'SELECT * FROM products OFFSET $1 LIMIT $2';
  const values = [(count * (page - 1)), count];
  return db.query(text, values);
};

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
};

const readProductStyles = (product_id) => {
  const query = `
    SELECT
      s.style_id,
      s.name,
      s.original_price,
      s.sale_price,
      default_style AS "default?",
      (SELECT json_agg(
        json_build_object(
          'thumbnail_url', ph.thumbnail_URL,
          'url', ph.url)
        )
        FROM photos ph
        WHERE ph.style_id = s.style_id
      ) photos,
      (SELECT json_object_agg(
        sk.sku_id, json_build_object(
          'quantity', sk.quantity,
          'size', sk.size)
        )
        FROM skus sk
        WHERE sk.style_id = s.style_id
      ) skus
    FROM styles s
    WHERE s.style_id IN (
      SELECT s.style_id
      FROM styles s
      WHERE s.product_id = ${product_id}
    )
    ORDER BY s.style_id
  `;
  return db.query(query);
};

const readRelatedProducts = (product_id) => {
  const query = `
    SELECT related_prod_id
    FROM related_products
    WHERE curr_prod_id = ${product_id}
  `;
  return db.query(query);
};

module.exports = { readAllProducts, readProductInfo, readProductStyles, readRelatedProducts };
