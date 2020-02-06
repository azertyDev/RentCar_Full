const User = require('../models/user');

module.exports ={
    login: async (req, res, next) => {
        const {email} = req.body;
        console.log(req.body)
        const user = await User.findOne({
           email
        });
        console.log('user', user)
        if(!user) {
            return res.status(400).json({
                message: 'User not found!'
            });
        }
        res.status(200).json(user);
    }
}