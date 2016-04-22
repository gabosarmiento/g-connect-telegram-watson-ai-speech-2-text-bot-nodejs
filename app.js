'use strict';
var http = require('http');

var port = (process.env.PORT || 5000);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ name: 'speech2textbot', ver: '0.0.1' }));
  res.end();
}).listen(port);
