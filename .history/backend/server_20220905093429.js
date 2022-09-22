const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(5001, console.log('Server running on port 5001'));
