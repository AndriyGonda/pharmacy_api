const express = require('express');
const { check } = require('express-validator');
const { postLogin } = require('../controlers/auth');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.route('/login')
    .post([
        check('login')
            .isLength({ min: 5, max: 255 })
            .withMessage('length can be in range 5-255 characters'),

        check('password')
            .isLength({ min: 5, max: 25 })
            .withMessage('length can be in range 5-25 characters')
    ], validationMiddleware, postLogin);

module.exports = router;
