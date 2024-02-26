const express = require("express")
const app = express()
const path = require("path")
const port = 3030

    /*RUTES*/ 
const authRoutes = require('./routes/authentication.routes');
const prodRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const homeRoutes = require('./routes/index.routes');
const errorRoutes = require('./routes/error.routes');

 /* CONFIGS */
app.use(express.static("public")) 

/* ROUTERS */
app.use("/", homeRoutes)
app.use("/auten", authRoutes)
app.use("/productos", prodRoutes)
app.use("/carrito", cartRoutes)
app.use("/error", errorRoutes)

/*app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})*/


/*app.get("/productCart", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/productCart.html"))
})*/


/*app.get("/productDetail", (req, res) =>{
    res.sendFile(path.join(__dirname,"./views/productDetail.html"))
});*/


/*app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"))
});*/

/*app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"))
});*/





  /* MIDDLEWARE */



  /* SERVER */
    app.listen(port, ()=>{
    console.log(`corriendo http://localhost:${port}`)
    })