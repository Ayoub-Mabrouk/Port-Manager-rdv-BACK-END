const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {ShipOwnerController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(ShipOwnerController.getAllShipOwner);
router
    .route('/:id')
    .get(ShipOwnerController.getShipOwner)
    .patch(ShipOwnerController.updateShipOwner)
    .delete(ShipOwnerController.deleteShipOwner);

module.exports = router;