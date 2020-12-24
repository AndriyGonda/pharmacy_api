const userSerializer = require('../serializer');
const { User } = require('../models');

const getUsers = (req, res, next) => {
    User.findAll()
        .then((users) => res.json(
            userSerializer.serialize(users, User)
        ))
        .catch(next);
};

const postUsers = (req, res) => {
    const props = req.body;
    User.create(props)
        .then((user) => res.json(userSerializer.serialize(user, User)))
        .catch((err) => res.status(400).json({
            detail: { errors: err.errors.map((error) => error.message) }
        }));
};

module.exports = {
    getUsers,
    postUsers
};
