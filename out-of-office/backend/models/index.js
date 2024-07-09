const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('OutOfOfficeSolution', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Employee = require('./employee')(sequelize, Sequelize.DataTypes);

sequelize.sync();

module.exports = { Employee, sequelize };
