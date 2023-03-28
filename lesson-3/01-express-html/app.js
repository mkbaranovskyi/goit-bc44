const express = require('express')
const app = express() // web-server

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/contacts', function (req, res) {
  res.send('<h1>Contacts</h1>')
})

app.post('/data', (req, res) => {
  res.send('Post is successful')
})

app.listen(3000, () => console.log('The server is running on port 3000'))