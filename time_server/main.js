var net = require ('net')
var date = require ('strftime')

var port = process.argv[2] ? process.argv[2] : 8000

var server = net.createServer(function(socket){
  socket.setEncoding("utf8");
  var time = date('%F %R', new Date())
  socket.end(time + '\n')
}).listen(port, '127.0.0.1');



