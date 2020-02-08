const User = require('../models/user');

module.exports = {
    regUser: async (req,res, next) => {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send('That user already exists!');
        } else {
            user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                client: req.body.client,
                seller: req.body.seller

            });
            await user.save();
            return res.status(200).send(user);
        }

        console.log('Reg user: ', user);
    }
}