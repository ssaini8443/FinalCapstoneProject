const Category = require('../models/Category');
const errorHandler = require('../middlewares/errorHandler')



// add category image
exports.addCategoryImage = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"add category Image"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}

// delete category image
exports.deleteCategoryImage = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"Delete category Image"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}



// Add Category
exports.addCategory = async (req, res) => {
  try {
    res.status(201).json({success:true,message:"add category"})
  } catch (error) {
    errorHandler(error, req, res);
  }
}


// Get Category
exports.getCategory = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"get category"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}

exports.updateCategory = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"update category"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}

exports.deleteCategory = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"delete category"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}


