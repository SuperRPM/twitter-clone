let tweets = [
    {
        id: '1',
        text: '덴마크 초코초코 우유',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: '스웨덴 바나나 우유',
        createdAt: Date.now().toString(),
        name: 'rpm',
        username: 'rpm',
        // url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    }
];

export async function getAllTweets() {
    return tweets;
}

export async function getAllTweetsByUsername(username) {
    return tweets.filter((tweet) => tweet.name === username);
}

export async function getAllTweetsById(id) {
    return tweets.filter((tweet) => tweet.id === id);
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
    return tweets;
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