// src/routes/index.js
import ApiRoutes from './ApiRoutes';

import { Router } from 'express';
const router = Router();

/* ROUTES */
router.use('/api', ApiRoutes);

export default router;