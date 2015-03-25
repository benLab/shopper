/**
 * Created by beno.mathew on 3/24/15.
 */
console.log('app initializiation in server.js');

var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

//setting all the middleware
app.use(morgan('combined')); // log every request to the console
app.use(cookieParser()); // read cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(3001, function(){
  console.log('listening for any connection');
});