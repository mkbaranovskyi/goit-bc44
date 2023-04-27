const WebSocket = require('ws')

const ws = new WebSocket.Server({
  port: 3000,
})

const clients = []

ws.on('connection', (newClient, req) => {
  console.log('New client has connected!')
  clients.push(newClient)

  // setTimeout(() => {
  //   newClient.send('Welcome to WebSocket server!')
  // }, 2000)

  clients.forEach((savedClient) => {
    if (savedClient !== newClient) {
      savedClient.send('New user has joined the server')
    } else {
      savedClient.send('Welcome to WebSocket server!')
    }
  })
})

ws.on('error', console.error)

ws.on('message', (message) => 
  console.log(message)
)