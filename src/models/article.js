const {Sequelize, DataTypes} = require('sequelize');
const db = require('./index')
const sequelize = db.sequelize;


const Article = sequelize.define('article', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    motcle:{
        type: DataTypes.STRING,
        allowNull: false
    },    
})


module.exports = Article;