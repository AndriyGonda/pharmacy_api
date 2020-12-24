const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const { getUsers, postUsers } = require('../controlers/users');

router.route('/users')
    .get(getUsers)
    .post([
        check('name')
            .isLength({ min: 5 })
            .withMessage('Minimal length of name can be 5 characters'),

        check('email')
            .isEmail()
            .optional()
            .withMessage('Invalid email'),

        check('firstName')
            .isLength({ min: 3 })
            .optional()
            .withMessage('Minimal length of firstName can be 3 characters.')

    ], postUsers);

module.exports = router;
