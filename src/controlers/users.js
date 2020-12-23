'use strict'
const {validationResult } = require('express-validator');
const { User } = require('../models')

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => res.json(
            users))
        .catch(next)
}


const postUsers = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const props = req.body
    User.create(props)
        .then(user => res.status(200).json({
            user
        }))
        .catch(err => res.status(500).json({
            detail: err
        }))
}

module.exports = {
    getUsers,
    postUsers
}