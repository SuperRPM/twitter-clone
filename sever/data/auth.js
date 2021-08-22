import { User } from '../db/database.js';

export async function findByUsername(username) {

    return User.findOne({ where: {username: username}});
}

export async function findById(id) {
    return User.findOne({ where: {id: id}})
}

export async function createUser(user) {
    return User.create(user).then(data => data.dataValues.id);
}


