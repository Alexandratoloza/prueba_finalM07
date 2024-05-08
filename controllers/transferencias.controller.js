import { TRANSFERENCIAS } from "../models/transferencias.model.js";

export const transferenciaAll = async (req, res) => {

    const transferencias = await TRANSFERENCIAS.findAll()
    return res.json(transferencias)
}


export const transferenciasMonto = async (req, res) => {
    const {emisor, receptor, monto, fecha } = req.body
    const response = await TRANSFERENCIAS.create(emisor, receptor, monto, fecha)
    if (!response.ok){
        return res.status(500).json(response)
    }
    return res.json(response)
}