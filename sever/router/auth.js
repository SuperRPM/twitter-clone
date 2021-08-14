import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
import * as authController from '../controller/auth.js';
import { validate } from '../middleware/validator.js';

