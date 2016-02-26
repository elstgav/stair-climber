var express = require('express')
var path    = require('path')

var app = express()

var static_path = path.join(__dirname, './public')

app.use(express.static(static_path))


app.get('*', function(req, res) {
  res.sendFile(path.join(static_path, 'index.html'))
})


app.listen(process.env.PORT || 8080)
