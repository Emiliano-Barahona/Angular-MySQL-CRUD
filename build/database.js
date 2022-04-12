"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*IMPORTACIONES:
-"MySql" de mysql
-"Keys" del archivo "keys.ts"
*/
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
/* La constante pool es igual a la la creación de un pool con las propiedades del
onjeto databsae de la clase keys */
const pool = mysql_1.default.createPool(keys_1.default.database);
//Se obtiene la conexion realizando la función de:
pool.getConnection((err, connection) => {
    //Si tiene algún que tire el mismo
    if (err)
        throw err;
    connection.release();
    //Imprimir por pantalla "DB is Connected"
    console.log('DB is Connected');
});
/* IMPORTACIONES:
- Objeto pool, el cual contiene la conexión
*/
exports.default = pool;
