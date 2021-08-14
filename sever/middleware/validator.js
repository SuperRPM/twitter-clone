import { validationResult } from 'express-validator';

// export const validate = (req, res, next) => {
//     if (tweet) {
//         res.status(200).json(tweet);
//     } else {
//         res.status(404).json({message: `Tweet id(${id}) is not exist`});
//     }
// };


export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({message: errors.array()[0].msg });
    }
    return next();
};