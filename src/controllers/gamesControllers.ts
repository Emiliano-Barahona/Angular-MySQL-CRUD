/*IMPORTACIONES: 
-"Request" y "Response" de express 
-"Pool" del archivo "database.ts"
*/
import { Request, response, Response } from 'express';
import pool from "../database"
import * as util from 'util'
import { inspect } from 'util'

//Se crea una clase "GamesControllers" en la cual: 
class GamesControllers {
    constructor() {
        //Agregar al objeto router, la ruta "config"
        this.config();
    }

    //Se crea un metodo llamado "config" para definir las rutas
    config():void {
        this.list;
        this.getOne;
        this.create;
        this.delete;
        this.update
    }
    
    //OBTENCIÓN DE LA LISTA DE JUEGOS
    /*Se crea un metodo "list" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    public async list (req: Request, res:Response) {
        //Se crea una constante games que será igual a la petición de seleccionar todo de esta y
        const listgames = await pool.query("SELECT * FROM games")
        //Responderá imprimiendo por pantalla dicha variable games
        //const games = console.log(listgames);
        //console.log(JSON.stringify(games))
    }

    //OBTENCIÓN DE UN JUEGO
    /*Se crea un metodo "create" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    public async getOne (req: Request, res: Response) { 
        /*Responder con una respuesta json, imprimiendo por pantalla
        "{text: "This is game" + los parametros del requerimiento }"*/
        try {
            pool.query("SELECT * FROM games where id ? ", [req.params.id], (error, results) => {
                if(error) {
                    throw error;
                } else {
                    response.status(200).json(results.rows)
                }
            });    
            
        } catch (e) {
            throw new Error("no pude renderizar el resultado" + e)
        }
        
        
          
        res.json({text: "This is game" + req.params.id})
    }

    //CREACION DE UN JUEGO
    /*Se crea un metodo "create" donde manejará un requerimiento y una respuesta ejecutando
    una promesa sin que el metodo devuelva algo y realizando la función de:*/
    public async create(req: Request, res: Response): Promise<void> {
        //Asincronamente insertar en la tabla "games" los datos del arreglo y
        console.log("imprimir body :" + req.body);
        console.debug();
        await pool.query("INSERT INTO games set ?", [req.body]);
        //Responder con una respuesta json, imprimiendo por pantalla "{text:creating a game}"
        res.json({message: "Game Saved"})
    }

    //RECARGA / ACTUALIZAR UN JUEGO
    /*Se crea un metodo "delete" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    public update (req: Request, res: Response) {
        /*Responder con una respuesta json, imprimiendo por pantalla
        "{text:Updating a game + los parametros del requerimiento }"*/
        res.json({text: "Updating a game" + req.params.id})
    }

    //BORRAR UN JUEGO
    /*Se crea un metodo "delete" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    public delete(req: Request, res: Response) {
        //Responder con una respuesta json, imprimiendo por pantalla "{text:deleting a game}"
         res.json({text: "deleting a game" + req.params.id})
    }
}

//La constante gamesController es igual a una nueva inicialización de la clase GamesControllers
const gamesController = new GamesControllers()
//Se exporta la el objeto "gamesControllers"
export default gamesController