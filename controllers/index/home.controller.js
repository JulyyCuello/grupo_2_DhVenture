const { loadData } = require('../../dataBase');
module.exports = (req, res) => {
    const productHome = loadData()
        res.render( '../views/index.ejs', {dataBase : productHome})
}

