const express = require("express");
const router = express.Router(); 
/*const path = require('path');*/
const homeController = require('../controllers/index');


router.get('/', homeController.home)
router.get('/home', (req, res) => res.redirect('/')
);



module.exports = router;
