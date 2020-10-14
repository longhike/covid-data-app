const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  date: Date,
  total_cases: String,
  total_deaths: String,
  total_recovered: String
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
