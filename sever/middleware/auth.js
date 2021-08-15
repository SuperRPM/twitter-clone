import jwt from 'jsonwebtoken';
import * as userDatabase from '../data/auth.js';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json(AUTH_ERROR);
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MjkwMTI5NDg2MTAiLCJpYXQiOjE2MjkwMTI5NTEsImV4cCI6MTYyOTE4NTc1MX0.coweDME8af2izf-5JsqMVaeWZ8nh2P5ob4bfDItLFwA',
        async (error, decoded) => {
            if (error) {
                return res.status(401).json(AUTH_ERROR);
            }
            const user = await userDatabase.findAlreadyExist(decoded.id);
            if(!user) {
                return res.status(401).json(AUTH_ERROR);
            }
            req.userId = user.id; //req.custonData 새로 등록
            next();
        }
    )
}