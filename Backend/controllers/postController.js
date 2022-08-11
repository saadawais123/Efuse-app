const PostModel = require("../models/Posts");

exports.addPost = async (req, res, next) => {
  const post = new PostModel({
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
    likes: 0,
    comments: [],
    createdAt: new Date().toISOString(),
  });
  post
    .save()
    .then(() => res.send("post Added").status(200))
    .catch((err) => res.send(err.message).status(400));
};
exports.updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  PostModel.findByIdAndUpdate(postId, {
    content: req.body.content,
    likes: req.body.likes,
    comments: req.body.comments,
  })
    .then(() => res.send("User updated").status(200))
    .catch((err) => res.send(err.message).status(400));
};
exports.getPost = async (req, res, next) => {
  const postId = req.params.postId;
  PostModel.findById(postId)
    .then((Post) => res.json(Post).status(200))
    .catch((err) => res.send(err.message).status(400));
};

exports.addComment = async (req, res, next) => {
  console.log("here in comments");
  const postId = req.params.postId;
  const comment = {
    Comment: req.body.comment,
    userId: req.body.userId,
    like: 0,
    createdAt: new Date().toISOString(),
  };
  console.log("post id and comment", postId, comment);
  PostModel.findByIdAndUpdate(postId, {
    $push: {
      comments: comment,
    },
  })
    .then((Post) => res.json(Post).status(200))
    .catch((err) => res.send(err.message).status(400));
};
exports.addLikeToPost = async (req, res, next) => {
  const postId = req.params.postId;
  console.log("postid like", postId);
  PostModel.findByIdAndUpdate(postId, {
    $inc: {
      likes: 1,
    },
  })
    .then((Post) => res.json(Post).status(200))
    .catch((err) => res.send(err.message).status(400));
};
