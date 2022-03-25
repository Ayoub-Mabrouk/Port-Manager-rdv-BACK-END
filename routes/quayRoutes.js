const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {QuayController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(QuayController.getAllQuay);
router
    .route('/:id')
    .get(QuayController.getQuay)
    .patch(QuayController.updateQuay)
    .delete(QuayController.deleteQuay);

module.exports = router;