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


