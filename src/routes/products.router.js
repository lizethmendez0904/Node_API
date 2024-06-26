
import { Router } from 'express';
import { createProducts, showProducts, showIdProducts, updateProducts, deleteProducts} from '../controllers/products.controller.js';
import  verifyToken  from "../middlewares/jwt.middlewares.js";

const router = Router();

router.post('/products',verifyToken, createProducts);
router.get('/products',verifyToken, showProducts);
router.get('/products/:id',verifyToken, showIdProducts);
router.put('/products/:id',verifyToken, updateProducts);
router.delete('/products/:id',verifyToken, deleteProducts);

export default router;
