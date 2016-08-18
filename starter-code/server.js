'use strict'

var express = require('express');
var app = express();
// server.js
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.send("You're Dead!");
});


// start server
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});