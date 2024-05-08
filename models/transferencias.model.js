import { text } from 'express'
import {pool} from '../database/connection.js'
import { Usuarios } from './usuarios.model.js'


const findAll  = async () => {

    const { rows } = await pool.query( "SELECT * FROM TRANSFERENCIAS")
    return rows
    }   


 
const create  = async (emisor, receptor, monto, fecha) => {
 try{

    await pool.query("BEGIN")

    const usuario1 = await Usuarios.update(emisor, -monto, fecha)
    if(!usuario1) throw new error ("fallo la transacción")

    const usuario2 = await Usuarios.update(receptor, monto, fecha)
    if(!usuario2) throw new error ("fallo la transacción"
    )

    const query ={ 
        text: "INSERT INTO TRANSFERENCIAS (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [emisor, receptor, monto, fecha]
    }

    const { rows } = await pool.query(query)

    await pool.query("COMMIT")
    return {
        ok: true,
        data: rows[0]
    }

 } catch (error){
    console.log(error)
        await pool.query("ROLLBACK")
        return {
            ok: false,
            data: "Error en la transferencia"
        }
    }
 }



export const TRANSFERENCIAS = {
    
    findAll,
    create
}


