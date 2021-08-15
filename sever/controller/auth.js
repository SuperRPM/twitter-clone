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
    const token = createJwtToken(userId); //사용자의 고유값을 넘겨받아서 아이디로 사용하고 이걸로 토큰을 만들어줘
    res.status(200).json({ token, username});
}

export async function login(req, res) {
    const { username, password } = req.body;
    const user = await userDatabase.findAlreadyExist(username);
    if (!user) {
        return res.status(401).json( { message: '아이디랑 비밀번호를 확인하세용' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: '아이디랑 비밀번호 확인해야쥐? 잘못썼쥐?' });
    }
    const token = createJwtToken(user.id);
    res.status(200).json({ token, username });
}    


export function me(req, res) {

}