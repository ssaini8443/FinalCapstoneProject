const express = require('express')
const router = express.Router();


const {
    addCoupon,getCoupon,getAllCoupons,updateCoupon,deleteCoupon
} = require('../controllers/couponController')

//const {auth,adminAuth} = require('../middlewares/authMiddleware')

// get all coupons [admin]
router.route('/api/getallcoupons')
.get(getAllCoupons)


router.route('/api/coupon')
.get(getCoupon)
.post(addCoupon)
.put(updateCoupon)
.delete(deleteCoupon)


module.exports = router