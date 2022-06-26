import mysql from "mysql2/promise";
import 'dotenv/config';

const { HOSTNAME_DB, NAME_DB, USERNAME_DB, PASSWORD_DB, SOCKET_DB } = process.env;

export const pool = mysql.createPool({
   socketPath: SOCKET_DB,
   host: HOSTNAME_DB,
   database: NAME_DB,
   user: USERNAME_DB,
   password: PASSWORD_DB,
});




