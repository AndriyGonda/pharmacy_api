const Serializer = require('sequelize-json-serializer');
const { User } = require('./models');

Serializer.defineSchema(User, {
    fields: [
        'id',
        'email',
        'login',
        'isAdmin'
    ]
});

module.exports = Serializer;
