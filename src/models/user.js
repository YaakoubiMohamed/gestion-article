const { Sequelize, DataTypes } = require('sequelize');

const db= require('./index');
const sequelize = db.sequelize;

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     nom:{
        type: DataTypes.STRING,
        allowNull: false
     },
     prenom:{
        type: DataTypes.STRING,
        allowNull: false
     },
     email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
            isEmail: true
        }
     },
     password:{
        type: DataTypes.STRING,
        allowNull: false
     },
});

module.exports  = User;