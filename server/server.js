var express = require('express')
var path    = require('path')

var app = express()

var static_path = path.join(__dirname, './dist')



app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: static_path
  })
})

app.use('/', express.static(static_path))

app.listen(process.env.PORT || 8080)
