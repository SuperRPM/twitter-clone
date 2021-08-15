import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controller/auth.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateCredential = [
    body('username').trim().notEmpty().withMessage('아이디는 최소 5글자는 되야되는데'),
    body('password').trim().isLength({ min: 5 }).withMessage('비밀번호는 5글자 이상으로 입력해줭'),
    validate,
];

const validateSignup = [
    ...validateCredential,
    body('name').notEmpty().withMessage('이름이 없는뒈?'),
    body('email').isEmail().normalizeEmail().withMessage('이메일 제대로 입력한거 맞아?'),
    body('url').isURL().withMessage('경로가 이상한데?')
    .optional({ nullable: true, checkFalsy: true }), //nullabe: 입력안해도 됨, checkFalsy: 빈 문자열도 됨
    validate,
];

// POST /auth/signup
router.post('/signup', validateSignup, authController.signup);

// POST/auth/login
router.post('/login', validateCredential, authController.login);

// GET /auth/me
router.get('/me', isAuth, authController.me);

export default router;
