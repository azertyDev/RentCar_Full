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

    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        console.log('0-user', user);
        if(!user) {
            return res.status(404).json({ message: 'User doesn\'t exist'});
        }

        const carId = user.cars;
        console.log('1-carId: ', carId);
        const car = await Car.findById(carId);
        console.log('2- car: ', car);

        await user.remove();
        console.log('3-user:', user);

        if(car) {
            return await car.remove();
        }
        
        res.status(200).json(user);
        console.log('USERRRR: ', user);
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