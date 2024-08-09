const { Sequelize, DataTypes, Model } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

class Record extends Model { }

Record.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Record',
    tableName: 'records'
});

// Create the table if it doesn't exist
Record.sync({ force: false })
    .then(() => {
        console.log('Table Created Successfully');
    })
    .catch((error) => {
        console.error('Error Creating Table : ', error);
    });

module.exports = Record;