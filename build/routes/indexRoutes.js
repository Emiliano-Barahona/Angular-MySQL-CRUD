"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* IMPORTACIONES:
- Moudlo "Router" de express
- Objeto indexController del archivo "indexControllers.ts"
*/
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
//Se crea la clase "IndexRoutes" en donde:
class IndexRoutes {
    //El constructor lo que hará será lo siguiente:
    constructor() {
        //Se crea el objeto "router" de tipo router que es igual a la propieda router 
        this.router = (0, express_1.Router)();
        //Agregar al objeto router, la ruta config
        this.config();
    }
    //Se crea un metodo llamado "config" para definir las rutas
    config() {
        /*Este metodo cuando obtenga "/", devolverá el metodo index del objeto indexController*/
        this.router.get("/", indexControllers_1.indexController.index);
    }
}
//Se crea una constante "indexRoutes" que será igual a toda la clase "IndexRoutes"
const indexRoutes = new IndexRoutes();
/* IMPORTACIONES:
- El objeto Router de la clase "indexRoutes"
*/
exports.default = indexRoutes.router;
