const express = require('express');
const router = express.Router();
// const UserController = require('../controllers/userController');
const {RoleController,AuthController} = require('../controllers/index');


// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs 
router.use(AuthController.restrictTo('admin'));

router
    .route('/')
    .get(RoleController.getAllRole);
router
    .route('/:id')
    .get(RoleController.getRole)
    .patch(RoleController.updateRole)
    .delete(RoleController.deleteRole);

module.exports = router;