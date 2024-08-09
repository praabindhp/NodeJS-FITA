const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Secret key for JWT
const JWT_SECRET = 'my-dark-secret-key';

// Middleware to parse JSON bodies
app.use(express.json());

// Mock user data
const user = {
    username: 'admin',
    password: '$2b$10$vXr58T98iyuOtntVTjxl2OB2n/7sO9fdm2/fmklTfu8KRrIYNM4FG'
    // Hashed password of 'password123'
};

// Login route to authenticate user and generate JWT
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (username === user.username && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '3h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Middleware to verify JWT
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided!');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Invalid Token');
    }
};

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the simple Node.js API!');
});

app.get('/secure', authenticate, (req, res) => {
    console.log(req.user);
    res.send('You have accessed a secure route!');
});

// Start the server
app.listen(port, () => {
    console.log(`Praabindh's Server Running At ${port}`);
});