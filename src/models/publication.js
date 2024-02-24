const { Sequelize, DataTypes } = require('sequelize');

const db= require('./index');
const sequelize = db.sequelize;

const Publication = sequelize.define('publication', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
});
module.exports = Publication; 