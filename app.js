const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const { PORT } = require('./settings');

const port = PORT || 5000;

const app = express();
app.use(cors({
    allowCredentials: true
}));
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use('/', [
    require('./src/routes/users')
]);

// eslint-disable-next-line no-unused-vars
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});
