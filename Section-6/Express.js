const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

function sendHey(req, res) {
    res.status(200).send('Howdy, Praabindh!');
};

function sendHello(req, res) {
    res.status(201).send('Hello, World!');
}

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hari Priya' });
});

function sendHelloWithName(req, res) {
    const name = req.params.name;
    const location = req.query.location;
    res.status(201).send(`Welcome, ${name} - My Age Is ${location}`);
}

app.get('/', sendHey);
app.get('/hello', sendHello);
app.get('/hello/:name', sendHelloWithName);

// Start The Server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Is Running On PORT: ${port} 🚀`);
});

// {Scheme}{URL}{Routes}{Sub-Route}{Variable}{Query}
