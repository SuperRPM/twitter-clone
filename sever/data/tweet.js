import { Tweet, User } from '../db/database.js';
import pkg from 'sequelize'
const { Sequelize } = pkg;

const INCLUDE_USER = {
    attributes: ['id', 
            'text', 
            'createdAt', 
            'userId', 
            [Sequelize.col('user.name'), 'name'],
            [Sequelize.col('user.username'), 'username'],
            [Sequelize.col('user.url'), 'url'],
        ],
        include: {
            model: User,
            attributes: [],
        },
};

const ORDER_DESC = { order: [['createdAt', 'DESC']] };


export async function getAllTweets() {
    return Tweet.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllTweetsByUsername(username) {
    return Tweet.findAll({ 
        ...INCLUDE_USER, 
        ...ORDER_DESC,
        include: {
            ...INCLUDE_USER.include,
            where: {username: username},
        },
    });
}
//이게 시간이 지나니까 user테이블의 id인지 tweets테이블의 id인지 헷갈린다. 당연히 data/tweet이니까 tweet이겠지만 그래도 구분할 방법을 찾자.
export async function getAllTweetsById(id) {
    return Tweet.findByPk(id, INCLUDE_USER)
}

export async function createTweet(text, userId) {
    return Tweet.create({ text, userId }).then(data => this.getAllTweetsById(data.dataValues.id));
}

export async function updateTweet(id, text) {
    return Tweet.findByPk(id, INCLUDE_USER)
    .then((tweet) => {
        tweet.text = text;
        return tweet.save();
    })
}

export async function deleteTweet(id) {
    return Tweet.findByPk(id)
    .then((tweet) => {
        tweet.destroy();
    })
}