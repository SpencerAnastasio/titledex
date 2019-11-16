'use strict';

// Load  Modules
console.log('START');
var http           = require('http');
var path           = require('path');
var express        = require('express');
var bodyParser     = require('body-parser');
// var expressInit    = require('express-init');
// var methodOverride = require('method-override');
var initRoutes     = require('./lib/initRoutes.js');

// Load Exports & Declare Variables
var port       = 3000;
var app        = express();

app.use(express.static(path.join(__dirname, '/static')));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Load Routes
app.use(initRoutes.loader);

// Start Server
http.createServer(app).listen(port, function(req, res){
  console.log('Node server listening on port ' + port);
});
