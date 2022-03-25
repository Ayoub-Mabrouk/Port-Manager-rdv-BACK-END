const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {StorageAreaController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(StorageAreaController.getAllStorageArea)
    .post(StorageAreaController.createStorageArea)
router
    .route('/:id')
    .get(StorageAreaController.getStorageArea)
    .patch(StorageAreaController.updateStorageArea)
    .delete(StorageAreaController.deleteStorageArea);

module.exports = router;