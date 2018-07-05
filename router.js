var express = require('express')
var router = new express.Router();
var logger = require('./logger').Logger;

router.use(function timeLog(req, res, next) {
    // this is an example of how you would call our new logging system to log an info message
    logger.info("Test Message");
    next();
});

router.get('/', function (req, res) {
    res.send('Home Page');
});

module.exports = router;
