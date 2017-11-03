'use strict';

const http = require('http');

const Tailor = require('node-tailor');

const tailor = new Tailor({
  templatesPath: __dirname + '/templates'
});

// We need a container collecting all the fragments
// With some effort this can be done with nginx, apache modules as well

// - load fragments
// - parses *complete* HTML page and adds those to a common header (JS, CSS)
// - the interface is a valid HTML document (Liskov Substitution)
http.createServer((req, res) => {
  tailor.requestHandler(req, res);
}).listen(8080, function () {
  console.log('Server listening on port 8080');
});