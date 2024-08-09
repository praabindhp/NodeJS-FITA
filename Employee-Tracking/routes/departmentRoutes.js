const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Create a new department
router.post('/department', departmentController.createDepartment);
// Get all departments
router.get('/department', departmentController.getAllDepartments);
// Get a department by ID
router.get('/department/:id', departmentController.getDepartmentById);
// Delete a department
router.delete('/department/:id', departmentController.deleteDepartment);
// Update a department
router.put('/department/:id', departmentController.updateDepartment);
// Partially update a department
router.patch('/department/:id', departmentController.updateDepartmentByPatch);

module.exports = router;