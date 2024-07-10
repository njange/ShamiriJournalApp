// backend/src/routes/userRoutes.ts
import { Router } from 'express';
import { createUser } from '../controllers/userController'; // Import your user controller

const router = Router();

router.post('/', createUser);

export default router;
