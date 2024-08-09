const mysql = require('mysql2')
require('dotenv').config()

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

module.exports = {
    getAll: function (callback) {
        pool.query('SELECT * FROM records', callback);
    },

    getById: function (id, callback) {
        pool.query('SELECT * FROM records WHERE id = ?', [id], callback);
    },

    create: function (name, age, callback) {
        pool.query('INSERT INTO records (name, age) VALUES (?, ?)', [name, age], callback);
    },

    update: function (id, name, age, callback) {
        pool.query('UPDATE records SET name = ?, age = ? WHERE id = ?', [name, age, id], callback);
    },

    delete: function (id, callback) {
        pool.query('DELETE FROM records WHERE id = ?', [id], callback);
    }
}