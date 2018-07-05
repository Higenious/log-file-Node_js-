var express = require('express');
var app     = express();
var port    = 3000;
var router = require('./router');
var ip = require("ip");

app.use('/', router);


app.listen(3000, function() {
    console.log("Now Listening on port 3000");
  });
  