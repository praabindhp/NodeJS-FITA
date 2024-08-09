const express = require('express')
const router = express.Router()

const recordController = require('../controllers/recordController')

router.get('/records', recordController.getAllRecords)

router.get('/records/:id', recordController.getRecordById)

router.post('/records', recordController.createRecord)

router.put('/records/:id', recordController.updateRecord)

router.delete('/records/:id', recordController.deleteRecord)

module.exports = router