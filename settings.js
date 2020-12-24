const dotenv = require('dotenv');

dotenv.config();
const db = {
    HOST: process.env.DB_HOST || 'localhost',
    PORT: Number(process.env.DB_PORT) || 5432,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME
};
module.exports = {
    PORT: process.env.PORT,
    db,
    SECRET_KEY: process.env.SECRET_KEY || 'default_secret_key',
    JWT_EXPIRES_IN: Number(process.env.JWT_EXPIRES_IN || 3600)
};
