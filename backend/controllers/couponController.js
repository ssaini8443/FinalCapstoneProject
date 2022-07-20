const Coupon = require('../models/Coupon');
const errorHandler = require('../middlewares/errorHandler')




// Add Coupon
exports.addCoupon = async (req, res) => {
  try {
    res.status(201).json({success:true,message:"add Coupon"})
  } catch (error) {
    errorHandler(error, req, res);
  }
}


// Get Coupon
exports.getCoupon = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"get Coupon"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}


// Get All Coupons
exports.getAllCoupons = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"get all Coupons"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}




// Update Coupon
exports.updateCoupon = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"Update Coupon"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}



// Delete Coupon
exports.deleteCoupon = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"delete Coupon"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}


