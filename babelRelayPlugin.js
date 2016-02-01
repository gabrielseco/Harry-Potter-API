var getBabelRelayPlugin = require('babel-relay-plugin');

var schemaData = require('./src/data/schema.json').data;

module.exports = getBabelRelayPlugin(schemaData);