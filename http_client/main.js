var http = require('http')

url = process.argv[2]
if (!url) {
    url = 'http://www.google.de'
}

http.get(url, function(response) {
    response.on("data", function(data) {
        console.log(data)
    })
    response.setEncoding("utf8")
})
