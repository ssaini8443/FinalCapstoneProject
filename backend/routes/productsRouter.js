const express = require('express')
const router = express.Router();


const {
    addProductImage,deleteProductImage,addproduct,getproductsAdmin,getProducts,updateProduct,deleteProduct
} = require('../controllers/productController')

//const {auth,adminAuth} = require('../middlewares/authMiddleware')

// get products [admin] [pagination]
router.route('/api/productadmin')
.get(getproductsAdmin)
.post(addproduct)
.put(updateProduct)
.delete(deleteProduct)



router.route('/api/product')
.get(getProducts)



router.route('/api/productimage')
.post(addProductImage)
.delete(deleteProductImage)


module.exports = router