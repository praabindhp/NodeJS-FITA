const Record = require('../models/record')

exports.getAllRecords = async (req, res) => {
    try {
        const records = await Record.findAll();
        res.json(records);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Records');
    }
}

exports.getRecordById = async (req, res) => {
    try {
        const record = await Record.findByPk(req.params.id);
        if (record) {
            res.json(record);
        } else {
            res.status(404).send('Record Not Found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Record');
    }
}

exports.createRecord = async (req, res) => {
    try {
        const record = await Record.create(req.body);
        res.json({ id: record.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Creating Record');
    }
}

exports.updateRecord = async (req, res) => {
    try {
        const [updated] = await Record.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            res.sendStatus(200);
        } else {
            res.status(404).send('Record Not Found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Record');
    }
}

exports.deleteRecord = async (req, res) => {
    try {
        const deleted = await Record.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.sendStatus(200);
        } else {
            res.status(404).send('Record Not Found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Deleting Record');
    }
}
