var fs = require('fs');
var path = require('path');

function filterFunc(dir, prefix, callback) {
    prefix = '.' + prefix
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err)
        }
        filter = list.filter(function(file) {
            if (path.extname(file) === prefix) {
                return file;
            }
        })
        callback(null, filter);
    })

}
module.exports = filterFunc
