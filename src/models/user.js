const {
    Model
} = require('sequelize');

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate (models) {
            // define association here
        }
    }
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(128)
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        sequelize,
        modelName: 'User',
        tableName: 'users',
        underscored: true,
        timestamps: false,
        instanceMethods: {
            generateHash(password) {
                return 'test'
            },
            validPassword(password) {
                return false
            }
        }
    });
    return User;
};
