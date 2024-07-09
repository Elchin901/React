const { Employee } = require('../models');

const getEmployees = async (req, res) => {
    const employees = await Employee.findAll();
    res.json(employees);
};

const addEmployee = async (req, res) => {
    const newEmployee = await Employee.create(req.body);
    res.json(newEmployee);
};

const updateEmployee = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    employee.update(req.body);
    res.json(employee);
};

const deleteEmployee = async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
    employee.destroy();
    res.json({ message: 'Employee deleted' });
};

module.exports = { getEmployees, addEmployee, updateEmployee, deleteEmployee };
