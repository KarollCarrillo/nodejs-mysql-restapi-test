import { createPool } from 'mysql2/promise'; // Conjunto de conecciones que se pueden reutilizar
import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js'

//Equivale a la conexión
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

// Se instala el modulo dotenv para leer un archivo .env