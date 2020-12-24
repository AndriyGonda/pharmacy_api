const bcrypt = require('bcrypt');
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
            return res.status(200).json({
                user: userSerializer.serialize(user, User),
                token: 'test'
            });
        });
    });
};

module.exports = {
    postLogin
};
