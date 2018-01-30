'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  let guests = ['Mary', 'Don'];
  res.send(guests);
});

app.listen(8000);
