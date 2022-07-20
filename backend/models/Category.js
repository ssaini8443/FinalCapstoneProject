const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    image: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Category', CategorySchema)