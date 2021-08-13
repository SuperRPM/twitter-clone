import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js'
// import { getAllTweetsById } from '../data/tweet.js';
import {validate} from '../middleware/validator';
const router = express.Router();

const validateTweet = [
    body('text')
        .isLength({ min: 3, max: 255 })
        .withMessage('너무 짧으면 안돼. 하지만 너무 길어도 안되지롱'),
        validate
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', 
validateTweet,
tweetController.postTweet);

// PUT /tweets/:id
router.put('/:id', 
validateTweet, 
tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.removeTweet);

export default router;

