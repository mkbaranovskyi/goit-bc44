const bookList = require('./book-list')
const express = require('express')
const app = express() // web-server


app.get('/', function (req, res) {
  res.send(bookList)
})

app.listen(3000, () => console.log('The server is running on port 3000'))