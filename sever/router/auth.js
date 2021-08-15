import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controller/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateSignup = [
    ...validateCredential,
    body('name').notEmpty().withMessage('이름이 없는뒈?'),
    body('email').isEmail().normalizeEmail().withMessage('이메일 제대로 입력한거 맞아?'),
    body('url'),isURL().withMessage.('경로가 이상한데?').optional({ nullable: true, checkFalsy: true }),
    vlaidate,
];

// POST /auth/signup
router.post('/signup', validateSignup, authController.signup);

// POST/auth/login
router.post('/login', validateCredentail, authController.login);

// POST /auth/me
// router.post('/me', authController.me);

export default router;
