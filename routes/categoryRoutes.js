const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {CategoryController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(CategoryController.getAllCategory)
    .post(CategoryController.createCategory);
router
    .route('/:id')
    .get(CategoryController.getCategory)
    .patch(CategoryController.updateCategory)
    .delete(CategoryController.deleteCategory);

module.exports = router;