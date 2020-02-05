const User = require('../models/user');

module.exports ={
    login: async (req, res, next) => {
        const {email} = req.body;
        const user = await new User.findOne({
            email
        });
        if(!user) {
            return res.status(400).json({
                message: 'User not found!'
            });
        }
        res.status(200).json(user);
    }
}