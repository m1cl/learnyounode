var bl = require('bl')
var http = require('http')

var url = process.argv[2]
if (!url) {
    url = 'http://www.google.de'
}

http.get(url, function(response){
    response.pipe(bl(function(err, data){
        if (err) {
            console.log(err.message)
        }
        // data = data.toString() <-- make it more readable
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})
