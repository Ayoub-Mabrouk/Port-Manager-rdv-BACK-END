const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {CommunicationChannelController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(CommunicationChannelController.getAllCommunicationChannel);
router
    .route('/:id')
    .get(CommunicationChannelController.getCommunicationChannel)
    .patch(CommunicationChannelController.updateCommunicationChannel)
    .delete(CommunicationChannelController.deleteCommunicationChannel);

module.exports = router;