const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/plain');

    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            // Handle error if the file cannot be read
            res.statusCode = 500;
            res.end('Internal Server Error');
        } else {
            // Send the HTML content to the client
            res.statusCode = 200;
            res.end(data);
        }
    });
});

// Start the server
server.listen(port, 'localhost', () => {
    console.log(`Praabindh's ⚓ Server Is Running On PORT: ${port} 🚀`);
});
