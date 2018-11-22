var JsonDB = require('node-json-db');

var config = new JsonDB("/config", true, false);
var data = new JsonDB("/data", true, false);

module.exports.config = config;
module.exports.savedData = data;