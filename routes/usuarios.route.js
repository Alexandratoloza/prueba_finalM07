import { Router } from 'express';
import { createUsuarios, getAllUsuarios, getUsuarios, removeUsuarios, updateUsuarios } from '../controllers/usuarios.controller.js';



const router = Router()

router.get('/', getAllUsuarios)
router.get('/', getUsuarios )
router.post('/', createUsuarios )
router.delete('/:id', removeUsuarios)
router.put('/:id', updateUsuarios)


export default router;