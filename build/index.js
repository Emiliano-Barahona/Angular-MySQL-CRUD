"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*IMPORTACIONES:
-"Express" y el modulo "aplication" de express
-"Morgan" de morgan
-"Cors" de cors
-"indexRoutes" del archivo "indexRoutes.ts"
-"gamesRoutes" del archivo gameRoutes
*/
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
// SERVIDOR
//Se crea la clase "Sever" en donde:
class Server {
    //En el constructor se:
    constructor() {
        //Llama a la variable y se le indica que es igual a un servidor y
        this.app = (0, express_1.default)();
        //Se inicializan los metodos
        this.config();
        this.routes();
    }
    /*Se crea un metodo llamado "config" en el cual seteará al objeto "app" para que
    se configure el servidor */
    config() {
        /*Aqui se crea un a variable "port" donde la misma contendrá el puerto que se le de
        (Ya sea uno definido al desplegar, o si no tiene ninguno sea el puerto local 3000) */
        this.app.set("port", process.env.PORT || 3000);
        /*Se configurá para que la app atraves de morgan use la función dev,
        (esto permite ver lo que el usuario pida)*/
        this.app.use((0, morgan_1.default)('dev'));
        //Se usa a la configuración cors para que angular pida los datos al servidor
        this.app.use((0, cors_1.default)());
        //Se usa la configuración express.json para que el servidor entienda el formato json
        this.app.use(express_1.default.json());
        //Se usa la configuración express.urlendedcoded para que cuando se envie un formulario HTML
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Se crea un metodo llamado "routes" para definir de "app" las rutas del servidor
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/games", gameRoutes_1.default);
    }
    //Se crea un metodo "start" para inicializar el servidor
    start() {
        /*Se llama al objeto "app" y se le dice que escuche en el puerto de la
        variable "port", mediante la acción get y haga la función de: */
        this.app.listen(this.app.get('port'), () => {
            //Imprimir por pantalla "Server on port" más la variable "port"
            console.log('Server on port', this.app.get('port'));
        });
    }
}
//Se almacena la clase en un objeto llamado server y
const server = new Server();
//Se utiliza el metodo "start" para inicializar el servidor
server.start();
