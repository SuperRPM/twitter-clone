import { db } from '../db/database.js';

export async function getAllTweets() {
    return db.execute('SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id ORDER BY tw.createdAt DESC'
    ).then(result => result[0]);
}

export async function getAllTweetsByUsername(username) {
    return db.execute('SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id WHERE username=? ORDER BY tw.createdAt DESC', [username])
    .then((result) => result[0]);
}

export async function getAllTweetsById(id) {
    return db.execute('SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id WHERE tw.id=?', [id])
    .then(result => result[0][0]);
}

export async function createTweet(text, userId) {
    const createdAt = new Date();
    return db.execute('INSERT INTO tweets (text, createdAt, userId) VALUES (?,?,?)', [text, createdAt, userId])
    .then(result => getAllTweetsById(result[0].insertId));
}

export async function updateTweet(id, text) {
    return db.execute('UPDATE tweets SET text=? WHERE id=?', [text, id])
    .then(result => getAllTweetsById(id));
}

export async function deleteTweet(id) {
    return db.execute('DELETE FROM tweets WHERE id=?', [id])
    // const indexToDelete = tweets.findIndex(function(tweet) {return tweet.id === id});
    // if (indexToDelete >= 0) {tweets.splice(indexToDelete, 1)}
}