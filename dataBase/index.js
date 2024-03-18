const fs = require("fs");
const path = require("path");

module.exports = {
    loadData: (nameJSON = "products") =>{//carga de datos con loadData
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



/*
const fs = require("fs").promises; // Utiliza fs.promises para operaciones asíncronas
const path = require("path"); // Importa el módulo 'path' para trabajar con rutas de archivos

module.exports = {
    async loadData(nameJSON = "products") { // Función para cargar datos desde un archivo JSON
        try {
            const pathJSON = path.join(__dirname, `/${nameJSON}.json`);// Construye la ruta completa al archivo JSON
            const dataJSON = await fs.readFile(pathJSON, "utf-8");// Lee el contenido del archivo de forma asíncrona
            const dataJS = JSON.parse(dataJSON);// Convierte el contenido leído (JSON) a un objeto JavaScript
            return dataJS; // Devuelve el objeto de datos
        } catch (error) {
            console.error("Error al cargar datos:", error.message);// Manejo de errores: muestra un mensaje de error y lanza la excepción
            throw error;
        }
    },
    async saveData(data, nameJSON = "products") {// Función para guardar datos en un archivo JSON
        try {
            const pathJSON = path.join(__dirname, `/${nameJSON}.json`);// Construye la ruta completa al archivo JSON de destino
            const dataString = JSON.stringify(data, null, 3);// Convierte los datos a una cadena JSON con formato legible
            await fs.writeFile(pathJSON, dataString, "utf-8");// Escribe la cadena de datos en el archivo de forma asíncrona
        } catch (error) {
            console.error("Error al guardar datos:", error.message);// Manejo de errores: muestra un mensaje de error y lanza la excepción
            throw error;
        }
    },
};
*/