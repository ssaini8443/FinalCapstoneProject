const express = require('express')
const router = express.Router();


const {
  addCategory,getCategory,updateCategory,deleteCategory,addCategoryImage,deleteCategoryImage
} = require('../controllers/categoryController')

//const {auth,adminAuth} = require('../middlewares/authMiddleware')


router.route('/api/category')
.post(addCategory)
.get(getCategory)
.put(updateCategory)
.delete(deleteCategory)


router.route('/api/categoryimage')
.post(addCategoryImage)
.delete(deleteCategoryImage)


module.exports = router