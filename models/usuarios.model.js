
import { pool } from "../database/connection.js"

const findAll = async () => {
    const {rows} = await pool.query ("SELECT * FROM USUARIOS")
    return rows 
}

const findOneById = async (id) => {
    const query = {
        text: "SELECT * FROM USUARIOS WHERE id = $1",
        values: [id]

    }
    const { rows } = await pool.query(query)
    return rows

}
 const create = async (nombre, balance) => {
    const query = {

        text: `INSERT INTO USUARIOS (nombre, balance) VALUES ($1, $2)`,
        values: [ nombre, balance]
    }
    const {rows} = await pool.query(query)
    return rows[0]
 }

 const remove = async (id) => {
    const query = {
        text: "DELETE FROM USUARIOS WHERE id = $1 ",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async (id, balance) => {
    const query = {
        text: "UPDATE USUARIOS SET balance = balance + $1 WHERE id = $2 RETURNING *",
        values: [balance, id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}



export const Usuarios = {
    findAll,
    create,
    findOneById,
    remove,
    update
}