var http = require('http')
var bl = require('bl')
var url = [3]
url[0] = process.argv[2] ? process.argv[2] : 'http://www.google.de'
url[1] = process.argv[3] ? process.argv[3] : 'http://www.github.com'
url[2] = process.argv[4] ? process.argv[4] : 'http://www.twitter.com'

function getResults(url) {
    url.map(function(url) {
        http.get(url, function(res) {
            res.pipe(bl(function(err, data) {
                if (err) {
                    console.error(err.message)
                }
                console.log(data.toString())
            }))
        })
    })
}

getResults(url)























// var content1;
// var content2;
// var content3;

// http.get(url, function(res) {
//     res.pipe(bl(function(err, data) {
//         content1 = data.toString()
//     }))
// })

// http.get(url2, function(res) {
//     res.pipe(bl(function(err, data) {
//         content2 = data.toString()
//     }))
// })

// http.get(url3, function(res) {
//     res.pipe(bl(function(err, data) {
//         content3 = data.toString()
//     }))
// })
// setTimeout(function() {
//     console.log(content1)
//     console.log(content2)
//     console.log(content3)
// }, 6000);
