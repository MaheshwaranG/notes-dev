const mongoose = require("mongoose");
const { Schema } = mongoose;

const userAccount = new Schema({
  id: Schema.Types.ObjectId,
  googleId: String,
  displayName: String,
  name: { type: Array, default: [] },
  email: String,
  emails: { type: Array, default: [] },
  photos: { type: Array, default: [] },
  gender: String,
  skills: String,
  tagline: String,
  googleplusurl: String,
  organizations: { type: Array, default: [] },
  placesLived: { type: Array, default: [] },
  provider: String,
  createdBy: { type: String, lowercase: true, trim: true },
  createdDate: { type: Date },
  updatedBy: { type: String, lowercase: true, trim: true },
  updatedBy: { type: Date },
  DOB: { type: Date },
  age: { type: Number, min: 5, max: 85 }
});

mongoose.model("user-account", userAccount);
