const { ObjectId, MongoClient } = require('mongodb')

require('dotenv').config();
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
console.log(uri);

let collection;

MongoClient.connect(uri)
    .then(client => {
        const db = client.db(process.env.MONGODB_DB);
        collection = db.collection("node-collection");
    })
    .catch(error => console.error(error));

exports.getData = (req, res) => {
    collection.find().toArray()
        .then(data => res.json(data))
        .catch(error => res.status(500).send(error));
};

exports.postData = (req, res) => {
    const newData = req.body;
    collection.insertOne(newData)
        .then(() => res.json({ message: 'Data Created Successfully' }))
        .catch(error => res.status(400).send(error));
};

exports.updateData = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedData })
        .then(() => res.json({ message: 'Data Updated Successfully' }))
        .catch(error => res.status(400).send(error));
};

exports.deleteData = (req, res) => {
    const id = req.params.id;
    collection.deleteOne({ _id: new ObjectId(id) })
        .then(() => res.json({ message: 'Data Deleted Successfully' }))
        .catch(error => res.status(400).send(error));
};