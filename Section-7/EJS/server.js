const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8888;

// Set views directory (where your EJS templates are located)
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the index EJS template with data
app.get('/', (req, res) => {
    const title = 'EJS NodeJS App';
    const message = 'Welcome To The Seesion ~ NodeJS !';
    const dataArray = ["NodeJS", "Express", "EJS"];
    const location = "Bangalore";
    res.render('index', { title, message, dataArray, location });
});

// Start the server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});
