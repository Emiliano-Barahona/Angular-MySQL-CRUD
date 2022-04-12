/*IMPORTACIONES: 
- "Request" y "Response" de express
*/
import { Request, Response } from 'express';

//Se crea una clase llamada "IndexControllers" en donde:
class IndexControllers {
    //Se crea un metodo "index" que manejará requerimientos y respuesta haciendo la función de:
    public index (req: Request, res:Response) {
        //Responder imprimiendo por pantalla "{text: "API is /api/games"}" 
        res.json({text: "API is /api/games"})
    }
}

/*EXPORTACIONES
- "indexController" la cual es igual a la clase "IndexControllers"
*/
export const indexController = new IndexControllers()