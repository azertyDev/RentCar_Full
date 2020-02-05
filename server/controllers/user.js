const User = require('../models/user');
const Car = require('../models/car');

module.exports = {
    index: async (req, res, next) => {
        const user = await User.find({});
        res.status(200).json(user);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById( userId );
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        console.log('result: ', result);
        res.status(200).json({ success: true});
    },

    updateUser: async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        console.log('result: ', result);
        res.status(200).json({ success: true});
    },

    getUserCars: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById( userId ).populate('cars');
        console.log('UserCars:', user);
        res.status(200).json(user);
    }, 
    
    newUserCars: async (req, res, next) => {
        const { userId } = req.params;
        // Create a new car
        const newCar = new Car(req.body);
        // Get user
        const user = await User.findById( userId );
        // Assign user as a car's seller
        newCar.seller = user;
        // Save the car
        await newCar.save();
        // Add car to the user's selling array 'cars'
        user.cars.push(newCar);
        // Save the user
        await user.save();
        res.status(201).json(newCar);
        // console.log(newCar);
    }
}