const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const clients = []

app.get('/long', async (req, res, next) => {
  clients.push({ req, res })

  setTimeout(() => {
    res.json({ message: 'hello in 3 seconds' })
  }, 3000)
})

app.listen(3000)