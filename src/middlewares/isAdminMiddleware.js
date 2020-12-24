const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../settings');
const { User } = require('../models');

const IsAdmin = (req, res, next) => {
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
            if (!user.isAdmin) return res.status(412).json({ detail: 'Admin user required' });
            next();
        });
    });
};

module.exports = IsAdmin;
