import express from 'express';
import { checkJwt } from '../../middlewares/session';
import { authRoutes } from './authRoutes';
import { itemRoutes } from './itemRoutes';
import { storageRoutes } from './storageRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/storage', storageRoutes);
router.use('/items', checkJwt, itemRoutes);

export { router as apiRoutes };
