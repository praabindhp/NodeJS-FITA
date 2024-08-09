const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/data', auth, validate, dataController.getData); // Read
router.post('/data', express.json(), dataController.postData); // Create
router.put('/data/:id', express.json(), dataController.updateData); // Update / Edit
router.delete('/data/:id', dataController.deleteData); // Remove

module.exports = router;