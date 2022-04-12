"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* IMPORTACIONES:
- Modulo "Router" de express
- Objeto gamesCrontroller del archivo "gamesControllers.ts"
*/
const express_1 = require("express");
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
//Se crea la clase GamesRoutes en donde:
class GamesRoutes {
    //El constructor lo que hará será lo siguiente:
    constructor() {
        //Se crea un objeto dentro de la misma que es de tipo router e igual a la propiedad Router
        this.router = (0, express_1.Router)();
        //Agregar al objeto router, la ruta "config"
        this.config();
    }
    //Se crea un metodo llamado "config" para definir las rutas
    config() {
        /*Este metodo cuando obtenga cierto "/" responderá como el objeto gamesController
        más un metodo anteriormente hecho */
        this.router.get("/", gamesControllers_1.default.list);
        this.router.get("/:id", gamesControllers_1.default.getOne);
        this.router.post("/", gamesControllers_1.default.create);
        this.router.put("/:id", gamesControllers_1.default.update);
        this.router.delete("/:id", gamesControllers_1.default.delete);
    }
}
//Se crea una constante "indexRoutes" que será igual a toda la clase "IndexRoutes"
const gamesRoutes = new GamesRoutes();
//Se exporta como default el objeto router de tipo router
exports.default = gamesRoutes.router;
