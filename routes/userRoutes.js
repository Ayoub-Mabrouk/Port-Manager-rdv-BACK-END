const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {UserController} = require('../controllers/index');
const authController = require('./../controllers/authController');

router.post('/createUser',UserController.createUser);
router.post('/login', authController.login);
router.post('/signup', authController.signup);

// Protect all routes after this middleware
router.use(authController.protect);

router.delete('/deleteMe', UserController.deleteMe);

// Only admin have permission to access for the below APIs 
router.use(authController.restrictTo('admin'));

router
    .route('/')
    .get(UserController.getAllUsers);


router
    .route('/:id')
    .get(UserController.getUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);

module.exports = router;