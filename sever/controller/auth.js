import * as userDatabase from '../data/auth.js';

const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 8);

const result = bcrypt.compareSync('abcd1234', hashed);
const hashed = bcrypt.hash(password, 10);

export function signup(req, res) {
    const username = req.body.username,
    const name = req.body.name,
    const email = req.body.email,
    const photo = req.body.url,
    const password  = req.body.password // token작업 해줘야 될듯?
    const userData = [username, password];
    
    const data = await (userDatabase.getHashed(userData));
    res.status(200).json(data);
}

export function login(req, res) {
    
}    


export function me(req, res) {

}