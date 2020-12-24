const express = require('express');
const { check } = require('express-validator');
const { getUsers, postUsers } = require('../controlers/users');
const validationMiddleware = require('../middlewares/validationMiddleware');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');

const router = express.Router();

router.route('/users')
    .get(isAdminMiddleware, getUsers)
    .post([
        check('login')
            .isLength({ min: 5, max: 255 })
            .withMessage('length can be in range 5-255 characters'),

        check('email')
            .isEmail()
            .withMessage('Invalid email'),

        check('isAdmin')
            .isBoolean()
            .optional(),

        check('password')
            .isLength({ min: 5, max: 25 })
            .withMessage('length can be in range 5-25 characters')

    ], isAdminMiddleware, validationMiddleware, postUsers);

module.exports = router;
