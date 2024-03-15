
module.exports = (req, res)=>{
    const products = require("../../dataBase/products.json")
    const marcas = require("../../dataBase/marcas.json")
    const { id } = req.params;
    const product = products.find((p) => p.id === +id);

    res.render("./admin/editProduct.ejs", { product, marcas }, (err, editListDashboard)=>{
        res.render("partials/dashboard.ejs", {
            contentView: editListDashboard})
        })
    }