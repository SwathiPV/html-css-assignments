"use strict";
var express = require('express');
var app = express();
app.set('port', 8081);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
app.use(express.static(__dirname + "/"));
exports = module.exports = app;
