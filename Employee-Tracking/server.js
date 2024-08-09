// server.js
const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const connectToDB = require('./utils/db');

const app = express();
app.use(express.json());

connectToDB(); // DB Connection

app.use('/api', employeeRoutes);
app.use('/api', departmentRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server Listening On ${port}`);
});