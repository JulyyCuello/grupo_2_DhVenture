const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products/products.controller');
// Juan
const adminController = require("../controllers/products");
const editProductController = require("../controllers/products");
//

<<<<<<< HEAD
router.get('/agregar-producto', productsControllers.create);

router.get("/dashboard",productsControllers.dashboard)
router.post("/agregar-producto", productsControllers.agregarProducto);

router.delete('/delete/:id', productsControllers.destroy);
=======
router.get("/productos", adminController.listaProducts);
router.get("/detalle/:id", adminController.detalle);

router.get('/nuevoProducto', productsControllers.dashboard);
router.post("/agregar-producto", productsControllers.agregarProducto);

router.get("/editarProducto/:id", editProductController.editProducts);
router.get("/editarProducto/:id", adminController.editado);

>>>>>>> 95802d061fde47d6fb76d26597072aa114bc032b

module.exports = router;