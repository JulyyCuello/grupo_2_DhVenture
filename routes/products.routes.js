const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products/products.controller');

router.get('/agregar-producto', productsControllers.create);

router.get("/dashboard",productsControllers.dashboard)
router.post("/agregar-producto", productsControllers.agregarProducto);

router.delete('/delete/:id', productsControllers.destroy);

module.exports = router;