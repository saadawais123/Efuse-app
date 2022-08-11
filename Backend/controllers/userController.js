const UserModel = require("../models/User");
const PostModel = require("../models/Posts");

exports.addUser = async (req, res, next) => {
  console.log("request", req);
  UserModel.init();
  const user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    createdAt: new Date().toISOString(),
  });
  user
    .save()
    .then(() => res.send("User Added").status(200))
    .catch((err) => res.send(err.message).status(400));
};
exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  UserModel.findByIdAndUpdate(userId, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
  })
    .then(() => res.send("User updated").status(200))
    .catch((err) => res.send(err.message).status(400));
};
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  UserModel.findById(userId)
    .then((user) => res.json(user).status(200))
    .catch((err) => res.send(err.message).status(400));
};

exports.getPostsOfUsers = async (req, res, next) => {
  const userId = req.params.userId;
  PostModel.find({ userId: userId })
    .then((Post) => res.json(Post).status(200))
    .catch((err) => res.send(err.message).status(400));
};
