const mongoose = require('mongoose')
const CouponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    discount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Coupon', CouponSchema)