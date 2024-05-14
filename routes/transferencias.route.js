import { Router } from "express";
import { transferenciaControlers } from '../controllers/transferencias.controller.js';



export const router = Router()

router.get ('/transferencias', transferenciaControlers.transferenciaAll)
router.post('/transferencias', transferenciaControlers.createTransferencia)
export default router;