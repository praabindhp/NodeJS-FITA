const express = require('express');
const recordRoutes = require('./routes/recordRoutes');

const app = express();
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use('/api/records', recordRoutes);

// Start The Server
app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});