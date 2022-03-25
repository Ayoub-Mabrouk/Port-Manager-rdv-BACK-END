const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {ContainerController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(ContainerController.getAllContainer);
router
    .route('/:id')
    .get(ContainerController.getContainer)
    .patch(ContainerController.updateContainer)
    .delete(ContainerController.deleteContainer);

module.exports = router;