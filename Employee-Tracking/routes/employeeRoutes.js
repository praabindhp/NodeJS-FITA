const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Create a new employee
router.post('/employee', employeeController.createEmployee);
// Get all employees
router.get('/employee', employeeController.getAllEmployees);
// Get an employee by ID
router.get('/employee/:id', employeeController.getEmployeeById);
// Delete an employee
router.delete('/employee/:id', employeeController.deleteEmployee);
// Update an employee
router.put('/employee/:id', employeeController.updateEmployee);
// Partially update an employee
router.patch('/employee/:id', employeeController.updateEmployeeByPatch);

module.exports = router;