import { Usuarios } from "../models/usuarios.model.js"

export const getAllUsuarios = async (req, res) => {
    console.log(req.query)
    const usuarios = await Usuarios.findAll()
    res.json(usuarios)
}

export const getUsuarios = async (req, res) => {

    try {
        const { id } = req.params
        const usuarios = await Usuarios.findOneByID(id)
        res.json(usuarios)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}

export const createUsuarios = async (req, res) => {

    try {
        const { nombre } = req.body;

        const { balance } = req.body
        console.log(nombre, balance)
        const nuevoUsuario = await Usuarios.create(nombre, balance)

        res.json(nuevoUsuario);
    } catch (error) {

        console.error("Error al crear usuario:", error);
        res.status(500).json({ message: "Error al crear usuario" });
    }
};

export const removeUsuarios = async (req, res) => {

    try {
        const { id } = req.params
        const usuario = await Usuarios.remove(id)
        res.json(usuario)
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ message: "Error al eliminar usuario" });
    }
}

export const updateUsuarios = async (req, res) => {

    try {
        const { id } = req.params
        const { balance} = req.body
        const usuario = await Usuarios.update(id, balance)
        res.json(usuario)

        if (usuarioActualizado > 0) {
            res.status(200).json({ message: "saldo de usuario actualizado correctamente" });
        } else {
            res.status(404).json({ message: "No se encontró ningún usuario con el ID proporcionado" });
        }
    } catch (error) {
        console.error("Error al actualizar saldo de usuario:", error);
        res.status(500).json({ message: "Error al actualizar saldo de usuario" });
    }
};