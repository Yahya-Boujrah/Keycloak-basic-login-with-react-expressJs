var http = require('http');

var dt = require('./date-module')
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('today\'s date is ' + dt.myDateTime());
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  }).listen(8080);