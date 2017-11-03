'use strict';

const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<html></head><body><div style="background:#def; width:900px; height:500px; padding:10px; margin:10px">PRODUCT LIST (no framework)</div></body></html>');
}).listen(8083, function () {
    console.log('Fragment Server listening on port 8083');
});
