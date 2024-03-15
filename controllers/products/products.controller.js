const fs = require('fs');
const path = require('path'); // Añade la importación de 'path'

const productsControllers = {
    agregarProducto: (req, res) => {
        const { name, price, modelo,almacenamiento,memoria,image} = req.body;
        let id=8

        console.log(name)
        console.log(price)
        console.log("estoy en productsController")

        const product = {
            id:id+1,
            name: name,
            price: price,
            modelo:modelo,
            almacenamiento:almacenamiento,
            memoria:memoria,
            image:image


        };

        const productsFilePath = path.join(__dirname, '../data/products.json');

       
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 

      
        products.push(product); 

        
        fs.writeFileSync(productsFilePath, JSON.stringify(products)); 

       res.redirect("/products/dashboard")
    },
    create: (req, res) => {
        res.render('create');
    },

    dashboard:(req,res)=>{

       
            const productsFilePath = path.join(__dirname, "../data/products.json");
            const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
       
        

res.render("dashboard",{products})
    },

    destroy: (req,res) => {

        const productsFilePath = path.join(__dirname, "../data/products.json");
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
         console.log("llegue a destroy")
        let {id}=req.params;
        console.log("metodo delete", id);
       
        console.log(products);
        const newArray=products.filter(product => product.id != id);
        console.log("newArray", newArray);
        const json=JSON.stringify(newArray);
                fs.writeFileSync(productsFilePath,json, 'utf-8');
                res.redirect("/");
               
      }
    
};

module.exports = productsControllers;
