const fs = require('fs');
const path = require('path'); // Añade la importación de 'path'

const productsControllers = {
    agregarProducto: (req, res) => {
        const { name, price, modelo,almacenamiento,memoria,image} = req.body;

        console.log(name)
        console.log(price)
        console.log("estoy en productsController")

        const product = {
            name: name,
            price: price,
            modelo:modelo,
            almacenamiento:almacenamiento,
            memoria:memoria,
            image:image


        };

        const productsFilePath = path.join(__dirname, '../../data/products.json');

       
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 

      
        products.push(product); 

        
        fs.writeFileSync(productsFilePath, JSON.stringify(products)); 

        res.send(products);
    },
    dashboard: (req, res) => {
        res.render('dashboard');
    }
};

module.exports = productsControllers;
