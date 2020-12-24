const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../settings');
const { User } = require('../models');

const authenticateJWT = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader || !bearerHeader.length) return res.status(422).json({ detail: 'Missing Bearer token.' });
    const token = bearerHeader.replace('Bearer', '').split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, value) => {
        if (err) {
            return res.status(422).json(
                {
                    detail: err
                }
            );
        }
        const userId = value.data.id;
        User.findByPk(userId).then((user) => {
            if (!user) return res.status(404).json({ detail: 'User not found' });
            next();
        });
    });
};

module.exports = authenticateJWT;
