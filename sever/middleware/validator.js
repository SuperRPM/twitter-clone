import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not exist`});
    }
};