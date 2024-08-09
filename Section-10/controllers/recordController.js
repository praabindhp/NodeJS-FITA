const Record = require('../models/record')

exports.getAllRecords = (req, res) => {
    Record.getAll((err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error Retrieving Records')
        } else {
            res.json(results)
        }
    })
}

exports.getRecordById = (req, res) => {
    const id = req.params.id
    Record.getById(id, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error Retrieving Record')
        } else if (results.length === 0) {
            res.status(404).send('Record Not Found')
        } else {
            res.json(results[0])
        }
    })
}

exports.createRecord = (req, res) => {
    const { name, age } = req.body
    Record.create(name, age, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error Creating Record')
        } else {
            res.json({ id: results.insertId })
        }
    })
}

exports.updateRecord = (req, res) => {
    const id = req.params.id
    const { name, age } = req.body
    Record.update(id, name, age, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error Updating Record')
        } else if (results.affectedRows === 0) {
            res.status(404).send('Record Not Found')
        } else {
            res.sendStatus(200)
        }
    })
}

exports.deleteRecord = (req, res) => {
    const id = req.params.id
    Record.delete(id, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error Deleting Record')
        } else if (results.affectedRows === 0) {
            res.status(404).send('Record Not Found')
        } else {
            res.sendStatus(200)
        }
    })
}