const express = require("express");
const router = express.Router();
// const UserController = require('../controllers/userController');
const { BlockController, AuthController } = require("../controllers/index");

// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs
router.use(AuthController.restrictTo("admin"));

router
  .route("/")
  .get(BlockController.getAllBlock)
  .post(BlockController.createBlock);
router
  .route("/:id")
  .get(BlockController.getBlock)
  .patch(BlockController.updateBlock)
  .delete(BlockController.deleteBlock);

module.exports = router;
