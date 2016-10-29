var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//set up port
var PORT = process.env.PORT || 3000;

// set up express 
var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(process.cwd() + "/public"));

//Nagivate the simple page on HTML 
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function(){
  console.log("App listening on port %s", PORT);
});