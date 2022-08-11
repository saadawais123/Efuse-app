const express = require("express");

const postController = require("../controllers/postController");

const router = express.Router();

router.post("/", postController.addPost);
router.post("/:postId/comment", postController.addComment);
router.post("/:postId/like", postController.addLikeToPost);

router.get("/:postId", postController.getPost);

router.patch("/:postId", postController.updatePost);

module.exports = router;
