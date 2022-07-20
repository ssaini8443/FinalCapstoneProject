const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: mongoose.Schema.Object,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
      text: true,
    },
    price: {
      type: Number,
      default: 0,
      trim: true,
    }
    
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Product', productSchema)