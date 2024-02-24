const { Sequelize } = require('sequelize');
const mysql =require('mysql2')
const config = require('../config/config');
module.exports = db = {};



const { host, port, user, password , database } = config.database;
const pool = mysql.createPool({host, port, user, password });
pool.query(`CREATE DATABASE IF NOT EXIST ${database}`);

// Connection a la /bd
const sequelize  = new Sequelize(database, user, password, {
    dialect: 'mysql',
    pool:{
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});
db.sequelize =  sequelize;

const User  = require("./user");
const Publication = require("./publication")


User.hasMany(Publication);
Publication.belongsTo(User);

sequelize.sync({force : true});
