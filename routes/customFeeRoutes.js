const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {CustomFeeController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(CustomFeeController.getAllCustomFee);
router
    .route('/:id')
    .get(CustomFeeController.getCustomFee)
    .patch(CustomFeeController.updateCustomFee)
    .delete(CustomFeeController.deleteCustomFee);
module.exports = router;