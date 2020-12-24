const express = require('express');
const { check } = require('express-validator');
const { getUsers, postUsers } = require('../controlers/users');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.route('/users')
    .get(getUsers)
    .post([
        check('name')
            .isLength({ min: 5, max: 255 })
            .withMessage('length can be in range 5-255 characters'),
        check('email')
            .isEmail()
            .withMessage('Invalid email')

    ], validationMiddleware, postUsers);

module.exports = router;
