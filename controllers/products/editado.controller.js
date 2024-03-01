const path = require("path")
const fs = require("fs")
const products = require("../../dataBase/products.json")

module.exports = (req, res) => {
    const { id } = req.params;
    const { title,marca,price,description,secction,stock } = req.params


    // const productFind = products.find(p => p.id === + id)
    
    // const productEdit = {
    //     id: +id,
    //     title: title ? title.trim() : productFind.title,
    //     price: price ? +price : productFind.price,
    //     description: description ? description.trim() : productFind.description,
    //     marca: marca ? marca.trim() : productFind.description,
    //     nuevo: secction === "nuevo",
    //     oferta: secction === "oferta",
    //     proximamente: seccion === "proximamente",
    //     stock: !!stock


    

    const productMap = products.map((p) => {
        if(p.id == +id){
            const productEdit = {
                ...p,
                title: title ? title.trim() : productFind.title,
                price: price ? +price : productFind.price,
                description: description ? description.trim() : productFind.description,
                marca: marca ? marca.trim() : productFind.description,
                nuevo: secction === "nuevo",
                oferta: secction === "oferta",
                proximamente: seccion === "proximamente",
                stock: !!stock

            }
            return productEdit;
        }
        return p
    })

    const productsJSON = JSON.stringify(productMap, null, 3);
    const pathProductos = path.join(__dirname, "../../dataBase/products.json")
    fs.writeFileSync(pathProductos, productsJSON, "utf-8")

    res.redirec("/products/productos/")

}

