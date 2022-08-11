const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.addUser);

router.get("/:userId", userController.getUser);

router.patch("/:userId", userController.updateUser);
router.get("/:userId/posts", userController.getPostsOfUsers);

module.exports = router;
