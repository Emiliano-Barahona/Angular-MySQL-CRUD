"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*IMPORTACIONES:
-"Request" y "Response" de express
-"Pool" del archivo "database.ts"
*/
const express_1 = require("express");
const database_1 = __importDefault(require("../database"));
//Se crea una clase "GamesControllers" en la cual: 
class GamesControllers {
    constructor() {
        //Agregar al objeto router, la ruta "config"
        this.config();
    }
    //Se crea un metodo llamado "config" para definir las rutas
    config() {
        this.list;
        this.getOne;
        this.create;
        this.delete;
        this.update;
    }
    //OBTENCIÓN DE LA LISTA DE JUEGOS
    /*Se crea un metodo "list" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Se crea una constante games que será igual a la petición de seleccionar todo de esta y
            const listgames = yield database_1.default.query("SELECT * FROM games");
            //Responderá imprimiendo por pantalla dicha variable games
            //const games = console.log(listgames);
            //console.log(JSON.stringify(games))
        });
    }
    //OBTENCIÓN DE UN JUEGO
    /*Se crea un metodo "create" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*Responder con una respuesta json, imprimiendo por pantalla
            "{text: "This is game" + los parametros del requerimiento }"*/
            try {
                database_1.default.query("SELECT * FROM games where id ? ", [req.params.id], (error, results) => {
                    if (error) {
                        throw error;
                    }
                    else {
                        express_1.response.status(200).json(results.rows);
                    }
                });
            }
            catch (e) {
                throw new Error("no pude renderizar el resultado" + e);
            }
            res.json({ text: "This is game" + req.params.id });
        });
    }
    //CREACION DE UN JUEGO
    /*Se crea un metodo "create" donde manejará un requerimiento y una respuesta ejecutando
    una promesa sin que el metodo devuelva algo y realizando la función de:*/
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Asincronamente insertar en la tabla "games" los datos del arreglo y
            console.log("imprimir body :" + req.body);
            console.debug();
            yield database_1.default.query("INSERT INTO games set ?", [req.body]);
            //Responder con una respuesta json, imprimiendo por pantalla "{text:creating a game}"
            res.json({ message: "Game Saved" });
        });
    }
    //RECARGA / ACTUALIZAR UN JUEGO
    /*Se crea un metodo "delete" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    update(req, res) {
        /*Responder con una respuesta json, imprimiendo por pantalla
        "{text:Updating a game + los parametros del requerimiento }"*/
        res.json({ text: "Updating a game" + req.params.id });
    }
    //BORRAR UN JUEGO
    /*Se crea un metodo "delete" donde manejará un requerimiento y una respuesta
    realizando la función de:*/
    delete(req, res) {
        //Responder con una respuesta json, imprimiendo por pantalla "{text:deleting a game}"
        res.json({ text: "deleting a game" + req.params.id });
    }
}
//La constante gamesController es igual a una nueva inicialización de la clase GamesControllers
const gamesController = new GamesControllers();
//Se exporta la el objeto "gamesControllers"
exports.default = gamesController;
