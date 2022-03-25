const express = require("express");
const router = express.Router();
// const UserController = require('../controllers/userController');
const { BlockPartController, AuthController } = require("../controllers/index");

// Protect all routes after this middleware
router.use(AuthController.protect);

// Only admin have permission to access for the below APIs
router.use(AuthController.restrictTo("admin"));

router.route("/").get(BlockPartController.getAllBlockPart).post(BlockPartController.createBlockPart)
router
  .route("/:id")
  .get(BlockPartController.getAllBlockPart)
  .patch(BlockPartController.updateBlockPart)
  .delete(BlockPartController.deleteBlockPart);

module.exports = router;
