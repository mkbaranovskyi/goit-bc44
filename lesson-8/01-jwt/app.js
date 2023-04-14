const express = require('express')
const app = express() // web-server
const cors = require('cors')

const booksRouter = require('./routers/books')
const authRouter = require('./routers/auth')
const { errorHandlingMiddleware } = require('./middlewares')

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/books', booksRouter)
// app.use('/contacts', contactsRouter)

app.use(errorHandlingMiddleware)

module.exports = app
