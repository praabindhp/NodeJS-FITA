const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

// Get all records
app.get('/api/records', (req, res) => {
    pool.query('SELECT * FROM records', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Retrieving Records');
        } else {
            res.json(results);
        }
    });
});

// Get a single record by ID
app.get('/api/records/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM records WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Retrieving Record');
        } else if (results.length === 0) {
            res.status(404).send('Record Not Found');
        } else {
            res.json(results[0]);
        }
    });
});

// Create a new record
app.post('/api/records', (req, res) => {
    const { name, age } = req.body;
    pool.query('INSERT INTO records (name, age) VALUES (?, ?)', [name, age], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Creating Record');
        } else {
            res.json({ id: results.insertId });
        }
    });
});

// Update a record
app.put('/api/records/:id', (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    pool.query('UPDATE records SET name = ?, age = ? WHERE id = ?', [name, age, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Updating Record');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Record Not Found');
        } else {
            res.sendStatus(200);
        }
    });
});

// Delete a record
app.delete('/api/records/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM records WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error Deleting Record');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Record Not Found');
        } else {
            res.sendStatus(200);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});
