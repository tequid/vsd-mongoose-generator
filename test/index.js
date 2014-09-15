
var mongoose = require('mongoose');
var db = require('../lib')(mongoose);
var dbdata = require('./test.json');

var schemas = db.generateSchemas(dbdata);


var models = {};

// build models
for (var name in schemas) {
  models[name] = mongoose.model(name, schemas[name]);
}

// log paths
for (var name in models) {
  models[name].schema.eachPath(function(path) {
    console.log(path);
  });
}

console.log('ok');
