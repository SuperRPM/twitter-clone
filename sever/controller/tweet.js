import { getSocketIO } from '../connection/socket.js';
import * as tweetRepository from '../data/tweet.js';

export async function getTweets(req, res) {
    const username = req.query.username;
    const data = await (username 
        ? tweetRepository.getAllTweetsByUsername(username)
        : tweetRepository.getAllTweets());
    res.status(200).json(data);
}

export async function getTweet(req, res) {
    const id = req.params.id;
    const tweet = await tweetRepository.getAllTweetsById(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not exist`});
    }
}

export async function postTweet(req, res) {
    const { text } = req.body;
    const tweet = await tweetRepository.createTweet(text, req.userId );
    res.status(201).json(tweet);
    getSocketIO().emit('tweets', tweet);
}

export async function updateTweet(req, res) {
    const id = req.params.id;
    const text = req.body.text;
    console.log(1);
    const validTweet = await tweetRepository.getAllTweetsById(id);
    console.log(validTweet);
    if (!validTweet) {
        return res.sendStatus(404);
    } console.log(2);
    if (validTweet.userId !== req.userId) {
        return res.sendStatus
    }
    console.log(3);
    const tweet = await tweetRepository.updateTweet(id, text);
    console.log(4);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id(${id}) not found`});
    }
}

export async function removeTweet(req, res) {
    const id = req.params.id;
    
    const validTweet = await tweetRepository.getAllTweetsById(id);
    if (!validTweet) {
        return res.sendStatus(404);
    }
    if (validTweet.userId !== req.userId) {
        return res.sendStatus
    }
    await tweetRepository.deleteTweet(id);
    res.sendStatus(204);
}