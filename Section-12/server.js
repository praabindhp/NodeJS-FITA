const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/api', dataRoutes);

// Start The Server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});

// URL: http://localhost:3000/api/data/:id