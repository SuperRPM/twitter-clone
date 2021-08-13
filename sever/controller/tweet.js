import * as tweetRepository from '../data/tweet.js';

export async function getTweets(req, res) {
    const username = req.query.username;
    const data = await (username 
        ? tweetRepository.getAllTweetsByUsername(username)
        : tweetRepository.getAllTweets());
    // console.log(data);
    // if (data) {
    //     res.status(200).json(data);
    // } else {
    //     res.sendStatus(404);
    // }
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
    const {text, name, username } = req.body;
    const tweet = await tweetRepository.createTweet(text, name, username);
    // if(tweet) {
    //     res.status(201).json(tweet);
    // } else {
    //     res.status(400).json({message: `Fail to make new post`});
    // }
    res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = await tweetRepository.updateTweet(id, text);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        console.log(404);
        res.status(404).json({ message: `Tweet id(${id}) not found`});
    }
}

export async function removeTweet(req, res) {
    const id = req.params.id;
    await tweetRepository.deleteTweet(id);
    res.sendStatus(204);
}