var express     = require('express')
var path        = require('path')
var compression = require('compression')

var app = express()

var static_path = path.join(__dirname, './public')



app.use(compression())
app.use(express.static(static_path))


app.get('*', function(req, res) {
  res.sendFile(path.join(static_path, 'index.html'))
})



var PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT) // eslint-disable-line no-console
})
