// HTTP Protocol
// HTTP is a protocol for transferring data over the web.

// Other protocols such as GRPC, WebSockets, WebRTC;

// deploy website on port 443

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

