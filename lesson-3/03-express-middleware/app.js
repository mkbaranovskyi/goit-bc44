const bookList = require('./book-list')
const express = require('express')
const app = express() // web-server
const cors = require('cors')
const fsp = require('fs/promises')
const { DateTime } = require('luxon')

app.use(cors())

const logger = async (req, res, next) => {
  console.log('middleware 2')
  const { method, url } = req;
  const date = DateTime.utc().toISO()
  await fsp.appendFile('./logger.txt', `${date} - ${method}: ${url}\n`)

  next()
}

// Мідлвер може виконувати будь-який код, змінювати об'єкти (req, res), додавати в них нові дані або завершити взаємодію з клієнтом, надавши йому відповідь
app.use((req, res, next) => {
  console.log('middleware 1')
  // req.user = { name: 'Masha', age: 20 }
  // res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// Буде використаний для всіх ендпоінтів
// app.use(logger)

// Приклад використання для конкретного ендпоынту
app.get('/books', logger, async function (req, res) {
  res.send('books')
})

app.get('/orders', async function (req, res) {
  res.send('orders')
})

app.listen(3000, () => console.log('The server is running on port 3000'))
