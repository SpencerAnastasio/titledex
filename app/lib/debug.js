'use strict';
console.log('debug loaded');

// Load Modules
var util = require('util');

// Middleware Console Request
exports.d = function(req, res, next){
  console.log('//---- request object ----//');
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(util.format('path: %s, verb: %s', req.route.path, req.route.methods));
  next();
};
