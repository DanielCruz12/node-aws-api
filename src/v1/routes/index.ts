import express from 'express';
import { authRoutes } from './authRoutes';
import { itemRoutes } from './itemRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/items', itemRoutes);

export { router as apiRoutes };
