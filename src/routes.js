import express, { Router } from 'express';

import adminController from './controllers/admin';
import authController from './controllers/auth';

const router = Router

router.get('/login', adminController.logIn);

router.post('/review', authController.verifyToken, adminController.addReview);

router.delete('/review', authController.verifyToken, adminController.removeReview);

export default router;