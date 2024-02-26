const path = require('path');

module.exports = (req, res) => {
    res.sendFile(path.join(__dirname,"../../views/404.html"));
};