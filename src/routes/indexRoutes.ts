/* IMPORTACIONES:
- Moudlo "Router" de express
- Objeto indexController del archivo "indexControllers.ts"
*/ 
import { Router } from  'express';
import { indexController } from '../controllers/indexControllers';

//Se crea la clase "IndexRoutes" en donde:
class IndexRoutes {
    //Se crea el objeto "router" de tipo router que es igual a la propieda router 
    public router: Router = Router()

    //El constructor lo que hará será lo siguiente:
    constructor() {
        //Agregar al objeto router, la ruta config
        this.config();
    }

    //Se crea un metodo llamado "config" para definir las rutas
    config():void {
        /*Este metodo cuando obtenga "/", devolverá el metodo index del objeto indexController*/
        this.router.get("/", indexController.index);
        }
}
//Se crea una constante "indexRoutes" que será igual a toda la clase "IndexRoutes"
const indexRoutes = new IndexRoutes();

/* IMPORTACIONES:
- El objeto Router de la clase "indexRoutes"
*/
export default indexRoutes.router