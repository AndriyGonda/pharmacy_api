// eslint-disable-next-line no-unused-vars
const errorMiddleware = (error, req, res, next) => {
    res.status(error.status || 500);
    const errMessage = { status: error.status, message: error.message };
    if (process.env.NODE_ENV === 'development') {
        errMessage.stack = error.stack;
        [errMessage.body] = error;
    }
    res.json({ errMessage });
};

module.exports = errorMiddleware;
