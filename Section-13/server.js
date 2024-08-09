const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Start The Server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});
