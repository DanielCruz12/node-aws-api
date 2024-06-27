import express from 'express';
import { authRoutes } from './authRoutes';
import { itemRoutes } from './itemRoutes';
import { checkJwt } from '../../middlewares/session';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/items', checkJwt, itemRoutes);

export { router as apiRoutes };
