// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: String,
    company: String,
}, { timestamps: true });

module.exports = mongoose.model('Department', departmentSchema);