const Department = require('../models/Department');

exports.createDepartment = async (req, res) => {
    try {
        const department = new Department(req.body);
        await department.save();
        res.json({ id: department._id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Creating Department');
    }
}

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Departments');
    }
}

exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        res.json(department);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Department');
    }
}

exports.deleteDepartment = async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Deleting Department');
    }
}

exports.updateDepartment = async (req, res) => {
    try {
        await Department.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Department');
    }
}

exports.updateDepartmentByPatch = async (req, res) => {
    try {
        await Department.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Department');
    }
}
