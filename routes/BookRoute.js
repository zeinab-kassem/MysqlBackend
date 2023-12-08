import { Router } from 'express';
const router = Router();


import { getAll, getById, create, deleteData} from '../controllers/BookController.js';

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id',deleteData)


export default router;