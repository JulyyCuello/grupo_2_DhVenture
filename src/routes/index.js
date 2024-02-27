const express = require('express');
const router = express.Router(); 
/*const path = require('path');*/
const idexControllers = require('../controllers/idexControllers');


router.get('/', idexControllers.index)
router.get('/home', (req, res) => res.redirect('/')
);



module.exports = router;