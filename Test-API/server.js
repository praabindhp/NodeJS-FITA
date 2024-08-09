const express = require('express');
const userRoutes = require('./routes/userRoute')

const app = express();
require('dotenv').config();
const port = process.env.PORT || 8888;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Praabindh's ⚓ Server Listening On ${port}`);
});

// URL: http://localhost:8888/remove/user