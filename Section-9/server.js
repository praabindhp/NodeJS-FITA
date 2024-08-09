const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 8888;

app.use(express.json());

const validate = [
    // Validate name field
    body('name').notEmpty().withMessage('Name Is Required'),

    // Validate email field
    body('email').isEmail().withMessage('Invalid Email Address'),

    // Validate password field
    body('password').isLength({ min: 6 }).withMessage('Password Must Be Minimum 6 Characters')
];

// Route handler for POST /users
app.post('/users', validate, (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.status(200).json({ message: 'User Created Successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});
