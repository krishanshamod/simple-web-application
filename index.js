var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Simple Web Application v1.2');
});

app.listen(8081, function () {
  console.log('Web Application running on port 8081!');
});