const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {DriverController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(DriverController.getAllDriver);
router
    .route('/:id')
    .get(DriverController.getDriver)
    .patch(DriverController.updateDriver)
    .delete(DriverController.deleteDriver);

module.exports = router;