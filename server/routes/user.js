const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/user');

// /users
router.route('/')
    .get(UsersController.index)
    .post(UsersController.newUser);
 
// /users/:userId
router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser);

// /users/:userId/cars
router.route('/:userId/cars')
    .get(UsersController.getUserCars)
    .post(UsersController.newUserCars)


module.exports = router;