const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {
        const user = await User.find({});
        res.status(200).json(user);
    }
}