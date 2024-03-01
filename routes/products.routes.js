const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products/products.controller');
// Juan
const adminController = require("../controllers/products");
const editProductController = require("../controllers/products");
//

router.get("/productos", adminController.listaProducts);

router.get('/nuevoProducto', productsControllers.dashboard);
router.post("/agregar-producto", productsControllers.agregarProducto);

router.get("/editarProducto/:id", editProductController.editProducts);
router.get("/editarProducto/:id", adminController.editado);


module.exports = router;