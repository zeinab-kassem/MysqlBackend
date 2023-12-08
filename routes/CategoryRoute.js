import { Router } from 'express';
const router = Router();
import { verifyToken } from '../middleware/auth.js';

import { getAll, getById, create, update } from '../controllers/CategoryController.js';

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', verifyToken, create);
router.put('/:id', verifyToken, update);



export default router;