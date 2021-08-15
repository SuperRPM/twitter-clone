import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userDatabase from '../data/auth.js';

const bcryptSalt = 10;
export async function signup(req, res) {
    const { username, name, email, photo, password } = req.body;
    //아이디 중복 가입 방지
    const exist = await userDatabase.findAlreadyExist(username);
    if (exist) {
        return res.status(409).json({ message: `${username}은(는) 이미 사용되고 있눈뒈?`});
    }

    const hashed = await bcrypt.hash(password, bcryptSalt);
    const userId = await userDatabase.createUser({
        username,
        password: hashed,
        name,
        email,
        url,
    });
    const token = createJwtToken(userId);
    res.status(200).json({ token, username});
}

export async function login(req, res) {
    const { username, password } = req.body;
    const userData = [username, password];
    const data = await (userDatabase.getHashed(userData));
    res.status(200).json(data);
}    


export function me(req, res) {

}