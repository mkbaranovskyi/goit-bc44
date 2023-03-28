const express = require('express')
const bookList = require('./book-list')

const router = express.Router()

router.get('/', async function (req, res) {
  console.log('get /books')
  res.send(bookList)
})

router.post('/author', async function (req, res) {
  console.log('post /books/author')
  res.send(bookList)
})

router.delete('/', async function (req, res) {
  console.log('delete /books')
  res.send(bookList)
})

module.exports = router