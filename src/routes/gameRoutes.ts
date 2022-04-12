/* IMPORTACIONES:
- Modulo "Router" de express
- Objeto gamesCrontroller del archivo "gamesControllers.ts"
*/
import { Router } from  'express';
import gamesController from '../controllers/gamesControllers';

//Se crea la clase GamesRoutes en donde:
class GamesRoutes {
    //Se crea un objeto dentro de la misma que es de tipo router e igual a la propiedad Router
    public router: Router = Router()

    //El constructor lo que hará será lo siguiente:
    constructor() {
        //Agregar al objeto router, la ruta "config"
        this.config();
    }

    //Se crea un metodo llamado "config" para definir las rutas
    config():void {
        /*Este metodo cuando obtenga cierto "/" responderá como el objeto gamesController
        más un metodo anteriormente hecho */
        this.router.get("/", gamesController.list)
        this.router.get("/:id", gamesController.getOne)
        this.router.post("/", gamesController.create)
        this.router.put("/:id", gamesController.update)
        this.router.delete("/:id", gamesController.delete)
    }
}

//Se crea una constante "indexRoutes" que será igual a toda la clase "IndexRoutes"
const gamesRoutes = new GamesRoutes();
//Se exporta como default el objeto router de tipo router
export default gamesRoutes.router