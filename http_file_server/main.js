var http = require('http');
var fs = require('fs');

var port = process.argv[2] ? process.argv[2] : 8000
var file = process.argv[3] ? process.argv[3] : '/home/m1cl/course/learnyounode/http_file_server/text.txt'

server = http.createServer(function(request, response){
   fs.createReadStream(file).pipe(response)
}).listen(port);
