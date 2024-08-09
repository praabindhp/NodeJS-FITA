// Form Handling With Express

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: false }));

// Handle POST requests
app.post('/', (req, res) => {
    const formData = req.body;
    const name = formData.name;
    const email = formData.email;
    console.log('Body:', formData);
    console.log('Name:', name);
    console.log('Email:', email);
    res.send('<h1>Form Submitted</h1>');
});

// Serve the form
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/">
            <label for="name">Name ~</label>
            <input type="text" name="name" id="name" required><br><br>
            <label for="email">Email ~</label>
            <input type="email" name="email" id="email" required><br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

// Start the server
const port = 8888;
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});
