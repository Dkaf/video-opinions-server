import express from 'express';

import adminController from './controllers/admin';
import authController from './controllers/auth';
import reviewController from './controllers/review';

const router = express();

router.get('/review', reviewController.getReviews);

router.post('/login', adminController.logIn);

router.post('/review', authController.verifyToken, adminController.addReview);

router.delete('/review', authController.verifyToken, adminController.removeReview);

router.post('/settings', authController.verifyToken, adminController.changePassword);

export default router;