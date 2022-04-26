const express = require('express');
const models = require('./models/models.js');

const app = express();
const port = 3000;

// List products
app.get('/products', (req, res) => {
  models.readAllProducts(req.query.page || 1, req.query.count || 5)
    .then((products) => res.status(200).send(products.rows))
    .catch((err) => res.sendStatus(500));
});

// Product information
app.get('/products/:product_id', (req, res) => {
  models.readProductInfo(req.params.product_id)
    .then((product) => res.status(200).send(product.rows[0]))
    .catch((err) => res.sendStatus(500));
});

// Product styles
app.get('/products/:product_id/styles', (req, res) => {
  const stylesObj = {product_id: req.params.product_id};
  models.readProductStyles(req.params.product_id)
    .then((styles) => {
      stylesObj.results = styles.rows;
      res.status(200).send(stylesObj);
    })
    .catch((err) => res.sendStatus(500));
});

// Related products
app.get('/products/:product_id/related', (req, res) => {
  models.readRelatedProducts(req.params.product_id)
    .then((related) => res.status(200).send(related.rows[0].related_products))
    .catch((err) => res.sendStatus(500));
})

app.listen(port, () => {
  console.log('listening on port:', port);
});
