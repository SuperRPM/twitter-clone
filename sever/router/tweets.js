import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js'
import { isAuth } from '../middleware/auth.js';
// import { getAllTweetsById } from '../data/tweet.js';
import {validate} from '../middleware/validator.js';

// 추가적으로 공부할것.
// validation
// sanitization
// contract Testing: Client-Server

const router = express.Router();

const validateTweet = [
    body('text')
        .isLength({ min: 3, max: 255 })
        .withMessage('너무 짧으면 안돼. 하지만 너무 길어도 안되지롱'),
    validate
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', isAuth, tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', isAuth, tweetController.getTweet);

// POST /tweets
router.post('/', isAuth, validateTweet, tweetController.postTweet);

// PUT /tweets/:id
router.put('/:id', isAuth, validateTweet,tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', isAuth, tweetController.removeTweet);

export default router;

