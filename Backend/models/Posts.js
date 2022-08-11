const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  comments: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        required: true,
      },
      like: {
        type: Number,
        required: false,
      },
    },
  ],
});

module.exports = mongoose.model("Post", PostSchema);
