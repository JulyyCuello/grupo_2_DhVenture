
const express = require("express")

const app = express()

const path = require("path")

const port = 3030



app.listen(port, ()=>{
    console.log(`corriendo http://localhost:${port}`)
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/hdex.html"))
})

app.get("/productCart", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/productCart.html"))
})

app.get("/productDetail", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/productDetail.html"))
})

app.use(express.static("public"))