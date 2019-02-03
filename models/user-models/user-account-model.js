const mongoose = require("mongoose");
const { Schema } = mongoose;

const userAccount = new Schema({
  googleId: String,
  username: String
});

mongoose.model("user-account", userAccount);
