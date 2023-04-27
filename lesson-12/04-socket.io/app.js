const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server)

io.on('connection', (newClient) => {
  console.log('New user connection')

  newClient.on('chat message', (message) => {
    console.log(message)

    io.emit('chat message', message)
  })
})

server.listen(3000)