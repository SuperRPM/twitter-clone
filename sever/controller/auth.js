import * as userDatabase from '../data/auth.js';

export async function signup(req, res) {
    const { username, name, email, photo, password } = req.body;
    const userData = [username, password];
    const data = await (userDatabase.getHashed(userData));
    res.status(200).json(data);
}

export async function login(req, res) {
    const { username, password } = req.body;
    const userData = [username, password];
    const data = await (userDatabase.getHashed(userData));
    res.status(200).json(data);
}    


export function me(req, res) {

}