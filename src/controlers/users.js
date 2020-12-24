const { User } = require('../models');

const getUsers = (req, res, next) => {
    // User.findByPk(1).then((user) => {
    //     console.log(user);
    // });
    User.findAll()
        .then((users) => res.json(
            users
        ))
        .catch(next);
};

const postUsers = (req, res) => {
    const props = req.body;
    User.create(props)
        .then((user) => res.status(200).json({
            user
        }))
        .catch((err) => res.status(500).json({
            detail: err
        }));
};

module.exports = {
    getUsers,
    postUsers
};
