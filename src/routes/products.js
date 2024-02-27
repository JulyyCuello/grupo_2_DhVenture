const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products/productsControllers');

router.get('/dashboard', productsControllers.dashboard);

router.post('/agregar-producto', productsControllers.agregarProducto);

module.exports = router;