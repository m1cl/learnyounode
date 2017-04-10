var fs = require('fs')

// var file = process.argv[2]
var path = '/home/m1cl/course/learnyounode/text.txt';
var fs = require('fs')
var path = process.argv[2]

fs.readFile(path, 'utf8', function( err, data ){
    var lines = data.split('\n').length -1;
    console.log(lines)
});

