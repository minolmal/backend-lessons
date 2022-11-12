const express = require('express')
const path = require('path')

const app = express()

// app.get('/', (req,res)=>{
//   res.status(200).send('home page')
// })

// app.all('*',(req,res)=>{
//   res.status(404).send('<h1>not found</h1>')
// })

// app.listen(5000, ()=>{
//   console.log('server listening on 5000')
// })

//app.get
//app.post

//serve index.html
// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname, './express-lesson/nav-bar/index.html'))
// })

app.use(express.static('./express-lesson/nav-bar/'))

app.listen(5000,()=>{
  console.log('server: http://localhost:5000')
})
