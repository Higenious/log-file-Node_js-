var file = require('file-system');
var fs = require('fs');
var ip = require("ip");
var Logger = exports.Logger = {};


var infoStream = fs.createWriteStream('logs/info.txt');


var errorStream = fs.createWriteStream('logs/error.txt');

var debugStream = fs.createWriteStream('logs/debug.txt');

Logger.info = function(msg) {
    var message = new Date().toISOString() + "\n";
    var message2 = ip.address()+ "\n";
   // console.log(ip.address());
    infoStream.write("IP Address is  : " + message2);
    infoStream.write("Time stamp is  : " + message);
  };
  
  Logger.debug = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    debugStream.write(message);
  };
  
  Logger.error = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };