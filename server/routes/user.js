const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/user');

// GET, POST -> /users
router.route('/')
    .get(UsersController.index)
    .delete(UsersController.deleteAllUser)
    .post(UsersController.newUser);

router.post('/fakeuser', UsersController.newFakeUser);

// GET, PUT, PATCH, DELETE -> /users/:userId
router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser)
    .delete(UsersController.deleteUser);

// GET, PUT, POST -> /users/:userId/cars (5e3ab1ec7a809b2d64d66177)
router.route('/:userId/cars')
    .get(UsersController.getUserCars)
    .post(UsersController.newUserCars);


module.exports = router;