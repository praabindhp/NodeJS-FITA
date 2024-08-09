const createUser = (req, res) => {
    res.status(200).json({ message: 'User Created Successfully' });
}

const removeUser = (req, res) => {
    res.status(200).json({ message: 'User Removed Successfully' });
}

module.exports = { createUser, removeUser };