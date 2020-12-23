'use strict'
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const {PORT} = require('./settings');
const {db} = require('./settings');

const port = PORT || 5000

const app = express()
app.use(express.json())
app.use(helmet());
app.use(logger('dev'));

app.listen(port, () => {
    console.log(db);
    console.log(`Application running on port ${port}`);
})