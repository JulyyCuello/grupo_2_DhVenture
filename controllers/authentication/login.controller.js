const path = require('path');
module.exports = (req, res) => {
    //res.sendFile(path.join(__dirname,"../../views/login"))
    res.render( '../views/login.ejs')
};