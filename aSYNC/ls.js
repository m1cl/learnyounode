var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var prefix = '.' + process.argv[3];

if(!dir){
    dir = "/home/m1cl/Projects/ajala.io"
}

if(!prefix){
    prefix = 'html'
}
console.log(inspect(path))
fs.readdir(dir, function(err, list){
    if(err){
        console.log(err)
    }

    list.filter(function(err, data){
        if(path.extname(data) === prefix){
            return file
        }
    })
})
