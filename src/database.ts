/*IMPORTACIONES:
-"MySql" de mysql
-"Keys" del archivo "keys.ts"
*/
import mysql from 'mysql';
import keys from './keys';

/* La constante pool es igual a la la creación de un pool con las propiedades del
onjeto databsae de la clase keys */
const pool = mysql.createPool(keys.database);

//Se obtiene la conexion realizando la función de:
pool.getConnection((err, connection) => {
    //Si tiene algún que tire el mismo
    if (err) throw err;

    connection.release();
    //Imprimir por pantalla "DB is Connected"
    console.log('DB is Connected');
})

/* IMPORTACIONES: 
- Objeto pool, el cual contiene la conexión
*/
export default pool;