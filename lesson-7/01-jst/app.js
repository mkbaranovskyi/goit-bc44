const express = require('express')
const app = express() // web-server
const cors = require('cors')

const booksRouter = require('./routers/books')
const authRouter = require('./routers/auth')

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/books', booksRouter)
// app.use('/contacts', contactsRouter)

app.use((err, req, res, next) => {
  const message = err.message || 'Server error'
  const code = err.code || 500
  res.status(code).send({ message })
})

module.exports = app
