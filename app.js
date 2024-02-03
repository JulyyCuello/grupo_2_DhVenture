const express = require("express")
const app = express()
const path = require("path")
const port = 3030



app.listen(port, ()=>{
    console.log(`corriendo http://localhost:${port}`)
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

app.use(express.static("public")) 

/*

const express = require('express')
const app = express()
const path = require('path')
const port = 3030;


app.use(express.static('public'))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/index.html'))

})


app.get('/productCart.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/productCart.html'))
})


app.get('/productDetail.html',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/productDetail.html'))
})



app.listen(port,() => console.log(`http://localhost:${port}`)) */




/*  const express = require("express")

const app = express()

const path = require("path")

const port = 3030



app.listen(port, ()=>{
    console.log(`corriendo http://localhost:${port}`)
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/hdex.html"))
})

app.use(express.static("public"))  */