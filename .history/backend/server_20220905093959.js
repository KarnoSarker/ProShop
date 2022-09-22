const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5001, console.log('Server running on port 5001'));
