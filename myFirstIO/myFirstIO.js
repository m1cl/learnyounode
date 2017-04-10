var fs = require('fs')

var path = process.argv[2] ? process.argv[2] : nil
var file = fs.readFileSync(path)

file = file.toString()
var newLines = file.split('\n')
var count = newLines.length
console.log(count-1)

// better: lines = fs.readFileSync(path, 'utf8').split('\n').length -1
