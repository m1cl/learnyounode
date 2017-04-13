var http = require('http');
var url = require('url');
var port = process.argv[2] ? process.argv[2] : 8000
var timeJSON

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var uri = url.parse(req.url, true)
    if (uri.pathname == '/api/parsetime') {
        timeJSON = JSON.stringify({
            "hour": new Date(uri.query.iso).getHours(),
            "minute": new Date(uri.query.iso).getMinutes(),
            "second": new Date(uri.query.iso).getSeconds()
        })
        res.end(timeJSON)
    }
    if (uri.pathname == '/api/unixtime') {
        timeJSON = JSON.stringify({
            "unixtime": new Date(uri.query.iso).getTime()
        })
        res.end(timeJSON)
    }
}).listen(port);
