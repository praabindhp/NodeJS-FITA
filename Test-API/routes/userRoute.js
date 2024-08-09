const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.delete('/remove', userController.removeUser);

module.exports = router;