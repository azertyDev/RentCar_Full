const Car = require('../models/car');
const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {
        const car = await Car.find({});
        res.status(200).json(car);
    },

    getCarInfo: async (req, res, next) => {
        const { carId } = req.params;
        const car = await Car.findById( carId ).populate('seller');
        
        if(!car) {
            return res.status(404).json({error: 'Car doesn\'t exist'});
        }

        res.status(200).json(car);
    },
    
    newCar: async (req, res, next) => {
        const seller = await User.findById(req.body.seller);

        const newCar = req.body;
        delete newCar.seller;

        const car = new Car(newCar);
        car.seller = seller;
        await car.save();
        seller.cars.push(car);
        await seller.save();

        res.status(201).json(car);
    },

    replaceCar: async (req, res, next) => {
        const { carId } = req.params;
        const newCar = req.body;
        const result = await Car.findByIdAndUpdate(carId, newCar);
        console.log('result: ', result);
        res.status(200).json({ success: true});
    },

    deleteCar: async (req, res, next) => {
        const { carId } = req.params;
        const car = await Car.findById(carId);

        if(!car) {
           return res.status(404).json({error: 'Car doesn\'t exist'});
        }

        const sellerId = car.seller;
        const seller = await User.findById(sellerId);

        await car.remove();

        seller.car.pull(car);
        await seller.save();

        res.status(200).json({ success: true});
    }

}