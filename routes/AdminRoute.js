import { Router } from 'express';
const router = Router();

import { register, getAll, signInUser } from '../controllers/AdminController.js';

router.get('/', getAll);
router.post('/', register);
router.post('/signin',signInUser)

export default router;