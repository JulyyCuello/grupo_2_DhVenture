const express = require("express");
const router = express.Router(); 
const path = require("path");
const prodController = require('../controllers/products');


/*router.get('/', prodController.prod)*/

router.get("/", (req, res) => {
    /*res.send("esto es producto")*/
   res.sendFile(path.join(__dirname,"../views/productDetail.html"));
})




module.exports = router;













module.exports = router;
