const express = require('express');
const router = express.Router()

const {getUsers} = require('../controlers/users')

router.route('/users')
    .get(getUsers)

module.exports = router