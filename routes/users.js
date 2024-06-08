const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pintrest");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);
