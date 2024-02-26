const express = require("express");
const router = express.Router(); 
const path = require("path");
const prodController = require('../controllers/products');


router.get('/', prodController.prod)






module.exports = router;













module.exports = router;
