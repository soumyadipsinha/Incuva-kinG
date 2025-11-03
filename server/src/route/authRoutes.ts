import { Router } from 'express';
import { signup, login, logout, getProfile } from '../controller/authController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/profile', authenticateUser, getProfile);

export default router;

