const express = require('express')
const app = express()
const path = require('path')
const port = 3030;


app.use(express.static('public'))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/index.html'))
})

app.get('/home', (req, res) => {
  res.redirect('/');
})

app.get('/micros.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/micros.html'))
})

app.get('/monitores.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/monitores.html'))
})

app.get('/notbooks.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/notbooks.html'))
})

app.get('/pcEscritorio.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/pcEscritorio.html'))
})


app.get('/placas.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/placas.html'))
})

app.get('/productCart.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/productCart.html'))
})


app.get('/productDetail.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/productDetail.html'))
})



app.listen(port,() => console.log(`http://localhost:${port}`))

