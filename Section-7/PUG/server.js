const express = require('express');
const path = require('path');

const app = express();

// Set views directory and template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Define a route to render the index template
app.get('/', (req, res) => {
    const title = 'NodeJS Session';
    const message = 'Welcome To NodeJS Session!';
    const dataArray = ['NodeJS', 'Express', 'Pug'];
    res.render('index', { title, message, dataArray });
});

// Start the server
const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});
