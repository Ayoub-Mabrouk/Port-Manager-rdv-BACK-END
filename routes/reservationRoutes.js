const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {ReservationController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(ReservationController.getAllReservation);
router
    .route('/:id')
    .get(ReservationController.getReservation)
    .patch(ReservationController.updateReservation)
    .delete(ReservationController.deleteReservation);

module.exports = router;