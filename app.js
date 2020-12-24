'use strict'
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const {PORT} = require('./settings');
const {db} = require('./settings');

const port = PORT || 5000

const app = express()
app.use(cors({
    allowCredentials: true
}))
app.use(express.json())
app.use(helmet());
app.use(logger('dev'));
app.use('/', [
    require('./src/routes/users')
])

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    const errMessage = {status: error.status, message: error.message};
    if (process.env.NODE_ENV === 'development') {
        errMessage.stack = error.stack;
        [errMessage.body] = error;
    }
    res.json({errMessage});
});
app.listen(port, () => {
    console.log(db);
    console.log(`Application running on port ${port}`);
})