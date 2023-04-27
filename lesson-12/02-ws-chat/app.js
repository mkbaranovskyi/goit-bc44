const WebSocket = require('ws')

const ws = new WebSocket.Server({
  port: 3000,
})

const clients = []

ws.on('connection', (newClient, req) => {
  console.log('New client has connected!')
  clients.push(newClient)

  newClient.on('message', (message) => {
    const encodedMessage = JSON.stringify(JSON.parse(message))

    clients.forEach((savedClient) => {
      if (savedClient !== newClient) {
        savedClient.send(encodedMessage)
      }
    })
  })
})

ws.on('error', console.error)

