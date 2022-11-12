const EventEmitter = require('events')

const testEmiiter = new EventEmitter()

testEmiiter.on('response', (arg1)=>{
    console.log(`Data recieved ${arg1}`)
})

testEmiiter.emit('response',5 )

// const http = require('http')

// const server = http.createServer()

// server.on('request', (req,res)=>{
//     res.end('welcome')
// })

// server.listen(5000)