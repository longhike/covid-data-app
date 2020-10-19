const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  date: Date,
  confirmed: Number,
  deaths: Number,
  recovered: Number
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
