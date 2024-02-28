const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products/products.controller');

router.get('/dashboard', productsControllers.dashboard);

router.post("/agregar-producto", productsControllers.agregarProducto);

module.exports = router;