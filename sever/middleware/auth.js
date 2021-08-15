import jwt from 'jsonwebtoken';
import * as userDatabase from '../data/auth.js';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json({ mesaage: "error" });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        'Bp8:M")g8y;Gxv%vP>Q/*s2d3KKmw+Cb',
        async (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: 'decode 실패' });
            }
            const user = await userDatabase.findAlreadyExist(decoded.id);
            console.log(decoded);
            if(!user) {
                return res.status(401).json({ message: "그런 유저 없는데?" });
            }
            req.userId = user.id; //req.custonData 새로 등록
            next();
        }
    )
}