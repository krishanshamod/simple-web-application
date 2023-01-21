var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8081, function () {
  console.log('Web Application running on port 8081!');
});