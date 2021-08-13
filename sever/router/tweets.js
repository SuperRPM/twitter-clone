import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js'
// import { getAllTweetsById } from '../data/tweet.js';

const router = express.Router();

const validate = (req, res, next) => {
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not exist`});
    }
};

// GET /tweets
// GET /tweets?username=:username
router.get('/', validate, tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', validate, tweetController.getTweet);

// POST /tweets
router.post('/', 
[
    body('text')
        .isLength({ min: 3, max: 255 })
        .withMessage('너무 짧으면 안돼. 하지만 너무 길어도 안되지롱'),
],
tweetController.postTweet);

// PUT /tweets/:id
router.put('/:id', validate, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.removeTweet);

export default router;

