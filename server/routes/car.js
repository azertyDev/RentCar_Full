const express = require('express');
const router = express.Router();
const CarController = require('../controllers/car');

router.route('/')
    .get(CarController.index)
    .post(CarController.newCar);

router.route('/:carId')
    .get(CarController.getCarInfo)
    .put(CarController.replaceCar)
    .delete(CarController.deleteCar);



module.exports = router;