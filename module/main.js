var filter = require('./module.js')
var fs = require('fs')

var dir = process.argv[2];
var prefix = process.argv[3];

if (!dir) {
    dir = '/home/m1cl/Projects/ajala.io'
}

if (!prefix) {
    prefix = 'html'
}

filter(dir, prefix, function(err, data) {
    data.map(function(data){
        console.log(data)
    })
})
