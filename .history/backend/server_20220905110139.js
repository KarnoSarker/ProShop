const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/ap/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5001, console.log('Server running on port 5001'));
