const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.json({ id: employee._id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Creating Employee');
    }
}

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Employees');
    }
}

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Employee');
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Deleting Employee');
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Employee');
    }
}

exports.updateEmployeeByPatch = async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Employee');
    }
}
