const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// THIS FILE IS NOT CORRECT ***********

const userSchema = new Schema(
  {
    google_id: {
      type: String,
      required: false,
    },
    facebook_id: {
      type: String,
      required: false,
    },
    github_id: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
    },
    first_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilepic: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// create mongoose Model
const User = mongoose.model("User", userSchema);

// export the model so other modules can import it
module.exports = {
  User,
};
