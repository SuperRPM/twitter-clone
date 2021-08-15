import * as userDatabase from './auth.js';

let tweets = [
    {
        id: '1',
        text: '덴마크 초코초코 우유',
        createdAt: new Date().toString(),
        userId: '1',
    },
    {
        id: '2',
        text: '스웨덴 바나나 우유',
        createdAt: new Date().toString(),
        userId: '1',
    }
];

export async function getAllTweets() {
    return Promise.all(
        tweets.map(async (tweet) => {
            const { username, name, url } = await userDatabase.findAlreadyExist(
                tweet.userId
            );
            return { ...tweet, username, name, url };
        })
    )
}

export async function getAllTweetsByUsername(username) {
    return getAllTweets().then((tweet) =>
        tweets.filter((tweet) => tweet.username === username);
    );
}

export async function getAllTweetsById(id) {
    const found = tweets.find((tweet) => tweet.id === id);
    if (!found) {
        return null;
    }
    const { username, name, url } = await userDatabase.findById(found.userId);
    return { ...found, username, name, url };
}

export async function createTweet(text, userId) {
    const tweet = {
        id: Date().toString(),
        text,
        createdAt: new Date(),
        userId,
    };
    tweets = [tweet, ...tweets];
    return getAllTweetsById(tweet.id);
}

export async function updateTweet(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id)
    tweet && (tweet.text = text);
    return tweet;
}

export async function deleteTweet(id) {
    
    const indexToDelete = tweets.findIndex(function(tweet) {return tweet.id === id});
    if (indexToDelete >= 0) {tweets.splice(indexToDelete, 1)}
}