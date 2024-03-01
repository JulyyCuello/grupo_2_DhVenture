const products = require("../../dataBase/products.json")
module.exports = (req, res) => {
    res.render("./admin/listProducts.ejs", {
        products
    }, (err, listDashboard)=>{
        res.render("partials/dashboard.ejs", {
            contentView: listDashboard
        } )
    } )
};
