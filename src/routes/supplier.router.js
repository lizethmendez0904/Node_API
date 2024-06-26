
import { Router } from 'express';
import { createSupplier, showSupplier, showIdSupplier, updateSupplier, deleteSupplier} from '../controllers/supplier.controller.js';
import  verifyToken  from "../middlewares/jwt.middlewares.js";

const router = Router();

router.post('/supplier',verifyToken, createSupplier);
router.get('/supplier',verifyToken, showSupplier);
router.get('/supplier/:id',verifyToken, showIdSupplier);
router.put('/supplier/:id',verifyToken, updateSupplier);
router.delete('/supplier/:id',verifyToken, deleteSupplier);

export default router;
