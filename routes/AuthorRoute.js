import { Router } from 'express';
const router = Router();

import { getAll, getById, create } from '../controllers/AuthorController.js';

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.get('/', getAll);

export default router;