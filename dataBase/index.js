
const fs = require("fs");
const path = require("path");

module.exports = {
    loadData: (nameJSON = "products") =>{
        const pathJSON = path.join(__dirname, `/${nameJSON}.json`)
        const dataJSON = fs.readFileSync(pathJSON, "utf-8")
        const dataJS = JSON.parse(dataJSON)
        return dataJS
    },
    saveData: (data, nameJSON = "products") => {
        const pathJSON = path.join(__dirname, `/${nameJSON}.json`);
        const dataString = JSON.stringify(data, null, 3);
        fs.writeFileSync(pathJSON, dataString, "utf-8");
    },
};