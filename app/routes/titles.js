'use strict';
console.log('titles loaded');

// Load Modules
var fs = require('fs');
// var request = require('request');


// Load Exports
var title = require('../models/title.js');

exports.index = function(req, res, next){
  console.log('index rendered');
  res.render('index.html');
};

exports.about = function(req, res, next){
  console.log('about rendered');
  res.render('about.html');
};
