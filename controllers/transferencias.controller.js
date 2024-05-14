import {TRANSFERENCIAS} from "../models/transferencias.model.js";

const transferenciaAll = async () => {


    try{

        const usuarios = usuarios.TRANSFERENCIAS.findAll()
        return res.json(usuarios)

    }catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'})
    }
}


const createTransferencia = async (req, res) =>{
    try {
        const {emisor, receptor, monto} = req.body
        const transferencia = await TRANSFERENCIAS.create(emisor, receptor, monto)
        return res.json(transferencia) 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'})
    }
}

export const transferenciaControlers = {
    transferenciaAll,
    createTransferencia
}