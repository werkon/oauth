
const express = require('express')
const app = express()

app.use('/', express.static('preact/build'));

app.get('/*', function (req, res) {
  res.send('Hello World')
})
 
app.listen(80)

