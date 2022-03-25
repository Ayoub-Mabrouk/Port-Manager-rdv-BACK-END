const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {TruckController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(TruckController.getAllTruck);
router
    .route('/:id')
    .get(TruckController.getTruck)
    .patch(TruckController.updateTruck)
    .delete(TruckController.deleteTruck);

module.exports = router;