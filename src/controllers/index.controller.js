import {pool} from '../db.js' // Se utiliza doble punto debido a que no está en la misma carpeta de routes


export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result [0]) // Retorna el resultado
}