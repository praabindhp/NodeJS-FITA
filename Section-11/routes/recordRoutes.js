const express = require('express')
const router = express.Router()
const recordController = require('../controllers/recordController')

// Get all records
router.get('/', recordController.getAllRecords)

// Get a single record by ID
router.get('/:id', recordController.getRecordById)

// Create a new record
router.post('/', recordController.createRecord)

// Update a record
router.put('/:id', recordController.updateRecord)

// Delete a record
router.delete('/:id', recordController.deleteRecord)

module.exports = router