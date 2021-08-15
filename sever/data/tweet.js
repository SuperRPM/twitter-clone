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
    return tweets;
}

export async function getAllTweetsByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username);
}

export async function getAllTweetsById(id) {
    return tweets.find((tweet) => tweet.id === id);
}

export async function createTweet(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
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