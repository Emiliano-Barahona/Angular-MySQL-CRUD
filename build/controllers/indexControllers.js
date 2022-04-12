"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
//Se crea una clase llamada "IndexControllers" en donde:
class IndexControllers {
    //Se crea un metodo "index" que manejará requerimientos y respuesta haciendo la función de:
    index(req, res) {
        //Responder imprimiendo por pantalla "{text: "API is /api/games"}" 
        res.json({ text: "API is /api/games" });
    }
}
/*EXPORTACIONES
- "indexController" la cual es igual a la clase "IndexControllers"
*/
exports.indexController = new IndexControllers();
