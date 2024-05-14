
import {pool} from '../database/connection.js'


const findAll  = async () => {
        const { rows } = await pool.query(
            "SELECT t.id AS transferencia_id, t.emisor, u_emisor.nombre AS nombre_emisor, " +
            "t.receptor, u_receptor.nombre AS nombre_receptor, t.monto, t.fecha " +
            "FROM transferencias t " +
            "JOIN usuarios u_emisor ON t.emisor = u_emisor.id " +
            "JOIN usuarios u_receptor ON t.receptor = u_receptor.id"
        );
     return rows
    }

 
const create  = async (emisor, receptor, monto ) => {

const query = { 
    text: 'INSERT INTO TRANSFERENCIAS (emisor, receptor, monto ) VALUES ( $1, $2, $3)',
    values: [emisor, receptor, monto]
}

const query2 = { 
    text: 'update usuarios set balance = balance - $1 where id = $2',
    values: [monto, emisor]
}

const query3 ={
    text: 'update usuarios set balance = balance + $1 where id = $2',
    values: [monto, receptor]
}

 try{

    await pool.query("BEGIN")
    const { rows } = await pool.query(query)
    await pool.query(query2);
    await pool.query(query3);
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
