const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author_username: {
        type: String,
        required: true,
      },
    price: {
        type: Number,
        required: true,
      },
    tags: {
        type: Array,
        required: true,
      },
    image: {
        type: String,
        required: true,
      },
     likes: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const Product = mongoose.model('Product', productSchema)

// export the model so other modules can import it
module.exports = {
  Product,
}
