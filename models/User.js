const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "You must have a username"
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
}, { strict: false });

const User = mongoose.model("User", UserSchema);

module.exports = User;
