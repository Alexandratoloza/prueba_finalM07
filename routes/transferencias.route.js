import { Router } from "express";
import {transferenciaAll, transferenciasMonto } from '../controllers/transferencias.controller.js'


const router = Router()

router.get ('/', transferenciaAll)
router.post('/', transferenciasMonto)

export default router