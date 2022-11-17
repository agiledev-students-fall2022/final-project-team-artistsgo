const mongoose = require('mongoose')
const Schema = mongoose.Schema


// THIS FILE IS NOT CORRECT ***********

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    email: {
    type: String,
    required: true,
    },
    profilepic: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      products: {
        type: Array,
        required: true,
      },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const User = mongoose.model('User', userSchema)

// export the model so other modules can import it
module.exports = {
  User,
}
