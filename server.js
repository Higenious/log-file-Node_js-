var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
 
var app = express()
 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
morgan.token('type', function (req, res) { return req.headers['content-type'] })

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.get('/user', function(req, res){
    res.send('printing users logs');
})


app.listen(5000, function() {
    console.log("Now Listening on port 5000");
  });
  