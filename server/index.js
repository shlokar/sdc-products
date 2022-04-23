const express = require('express');
const models = require('./models/models.js');

const app = express();
const port = 3000;

// Get all products
app.get('/products', (req, res) => {
  models.readAllProducts(req.query.page || 1, req.query.count || 5)
    .then((products) => res.send(products.rows))
    .catch((err) => res.sendStatus(500));
});

app.listen(port, () => {
  console.log('listening on port:', port);
});
