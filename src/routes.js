import express from 'express';

import adminController from './controllers/admin';
import authController from './controllers/auth';

const router = express();

router.post('/login', adminController.logIn);

router.post('/review', authController.verifyToken, adminController.addReview);

router.delete('/review', authController.verifyToken, adminController.removeReview);

export default router;