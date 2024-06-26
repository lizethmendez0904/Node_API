
import { Router } from 'express';
import { createPet_shop, showPet_shop, showIdPet_shop, updatePet_shop, deletePet_shop} from '../controllers/pet_shop.controller.js';
import  verifyToken  from "../middlewares/jwt.middlewares.js";

const router = Router();

router.post('/pet_shop', verifyToken, createPet_shop);
router.get('/pet_shop',verifyToken, showPet_shop);
router.get('/pet_shop/:id',verifyToken, showIdPet_shop);
router.put('/pet_shop/:id',verifyToken, updatePet_shop);
router.delete('/pet_shop/:id',verifyToken, deletePet_shop);


export default router;
