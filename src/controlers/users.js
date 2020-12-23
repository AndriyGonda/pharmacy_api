'use strict'

const { User } = require('../models')

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => res.json(
            users))
        .catch(next)
}

module.exports = {
    getUsers
}