'use strict';
console.log('intRoutes loaded');

// Load Exports & Declare Variables
var initialized = false;
var debug   = require('./debug.js');
var titles  = require('../routes/titles.js');

// Initialize Routes
// var router  = express.Router();
exports.loader = function(req, res, next){
  if(!initialized){
    load(req.app, next);
    initialized = true;
  }else{
    next();
  }
};

function load(app, next){
  app.get('/', debug.d, titles.index);
  app.get('/about', debug.d, titles.about);
  
  // app.get('/jingle', d, function (req, res) {res.render('./views/jingle.ejs');});
  // app.get('/:id', d, jinglegrams.show);
  // app.post('/', d, jinglegrams.create);
  // app.get('/sampleModels', d, sampleModels.index);
  // app.get('/sampleModels/create', d, sampleModels.createPage);
  // app.get('/sampleModels/:id', d, sampleModels.show);
  // app.get('/sampleModels/edit/:id', d, sampleModels.edit);
  // app.get('/auth', d, users.auth);
  // app.post('/sampleModels/create', d, sampleModels.create);
  // app.post('/register', d, users.register);
  // app.post('/login', d, users.login);
  // app.post('/', d, jinglegrams.create);
  // app.post('/logout', d, users.logout);
  // app.post('/sampleModels/update/:id', d, sampleModels.update);
  // app.post('/sampleModels/delete/:id', d, sampleModels.remove);
  // app.get('/*', d, function (req, res) {res.render('./views/404.ejs', {url:req.url});});

  console.log('routes loaded');
  next();
};
