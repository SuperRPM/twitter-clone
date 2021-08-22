import pkg from 'sequelize';
import { config } from '../config.js'

const { Sequelize, DataTypes } = pkg;
const { host, user, database, password } = config.db;
export const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: false,
});

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    url: {
        type: DataTypes.TEXT,
    }
}, { timestamps: false });

export const Tweet = sequelize.define('tweet', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, { updatedAt: false });
Tweet.belongsTo(User)//, {foreignKey: 'userId'})