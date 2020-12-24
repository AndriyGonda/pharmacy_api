const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, JWT_EXPIRES_IN } = require('../../settings');
const userSerializer = require('../serializer');
const { User } = require('../models');

const postLogin = (req, res, next) => {
    const { login, password } = req.body;

    User.findOne({
        where: {
            login
        }
    }).then((user) => {
        if (!user) {
            return res.status(404).json({ detail: 'User not found' });
        }
        bcrypt.compare(password, user.password).then((result) => {
            if (!result) {
                return res.status(401).json({ detail: 'Invalid username or password' });
            }
            const token = jwt.sign({
                data: {
                    id: user.id
                }
            }, SECRET_KEY, { expiresIn: JWT_EXPIRES_IN });
            return res.status(200).json({
                user: userSerializer.serialize(user, User),
                token
            });
        });
    });
};

module.exports = {
    postLogin
};
