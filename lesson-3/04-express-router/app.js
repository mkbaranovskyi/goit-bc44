const express = require('express')
const app = express() // web-server
const cors = require('cors')

const bookRouter = require('./books/index')
// const contactsRouter = require('./contacts/index')

app.use(cors())

app.use('/books', bookRouter)
// app.use('/contacts', contactsRouter)

app.listen(3000, () => console.log('The server is running on port 3000'))
