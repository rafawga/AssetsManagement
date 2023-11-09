const sequelize = require('sequelize');
 
//configurações da base de dados
const database = new sequelize('ProvaWeb', 'ProvaWebb', 'projeto12345',
{
    dialect: 'mssql', host:'localhost', port: 56122
});
 
database.sync();
 
module.exports = database;