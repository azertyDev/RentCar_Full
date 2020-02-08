const express = require('express');
const router = express.Router();
const CarController = require('../controllers/car');

// GET, POST -> /cars
router.route('/')
    .get(CarController.index)
    .delete(CarController.deleteAllCars)
    .post(CarController.newCar);

// GET, PUT, DELETE -> /cars/:carId (5e3ab563155ca12cac47ea83)
router.route('/:carId')
    .get(CarController.getCarInfo)
    .put(CarController.replaceCar)
    .delete(CarController.deleteCar);



module.exports = router;