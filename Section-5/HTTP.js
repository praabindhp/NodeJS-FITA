const http = require('http');
const port = process.env.PORT || 3000;

// Create a server
const server = http.createServer((req, res) => {

    // Set the response header
    res.setHeader('Content-Type', 'application/json');

    // Send a response
    res.end('Server Has Received The Request');
});

function onListening() {
    console.log(`Praabindh's ⚓ Server Is Running On PORT: ${port} 🚀`);
}

// Start the server
server.listen(port, 'localhost', onListening);

// Server - API - Client
// Chef - Waiter - Customer

// Client -> Server ( Request ) // Req 1000 Names In English
// Server -> Client ( Response ) // { 1000 Names In English }