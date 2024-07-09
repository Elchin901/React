const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('OutOfOfficeSolution', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fullName: { type: DataTypes.STRING, allowNull: false },
    subdivision: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('Active', 'Inactive'), allowNull: false },
    peoplePartner: { type: DataTypes.INTEGER },
    outOfOfficeBalance: { type: DataTypes.INTEGER, allowNull: false },
    photo: { type: DataTypes.STRING }
});

module.exports = Employee;
