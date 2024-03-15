const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

// Middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
const authRoutes = require('./routes/authentication.routes');
const prodRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const homeRoutes = require('./routes/index.routes');
const errorRoutes = require('./routes/error.routes');


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static Middleware
app.use(express.static("public"));

// ROUTERS
app.use("/", homeRoutes);
app.use("/auten", authRoutes);
app.use("/products", prodRoutes);
app.use("/carrito", cartRoutes);
app.use("/error", errorRoutes);


// SERVER
app.listen(port, () => {
    console.log(`corriendo http://localhost:${port}`)
})
