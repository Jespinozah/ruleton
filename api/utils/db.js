var loki = require('lokijs');

var db = new loki('db.json');
db.addCollection('launches');
module.exports = db;
