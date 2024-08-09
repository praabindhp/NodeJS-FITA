const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect('mongodb+srv://praabindhp:cKduzNatGMMUdJbL@nodedb-cluster.bomq77w.mongodb.net/')
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.error(err));
}

module.exports = connectToDB;
