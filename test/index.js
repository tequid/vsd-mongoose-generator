
var generator = require('../lib');
var modelData = require('./test.json');

var schemas = generator.generateSchemas(modelData);

var models = generator.generateModels(schemas);

// log paths
for (var name in models) {
  models[name].schema.eachPath(function(path) {
    console.log(path);
  });
}

console.log('ok');
