import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controller/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

// POST /auth/signup
router.post('/signup', authController.signup);

// POST/auth/login
router.post('/login', authController.login);

// POST /auth/me
router.post('/me', authController.me);

export default router;
