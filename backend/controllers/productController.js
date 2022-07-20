const Category = require('../models/Category');
const errorHandler = require('../middlewares/errorHandler')



// add product image
exports.addProductImage = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"add product Image"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}

// delete product image
exports.deleteProductImage = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"Delete product Image"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}






// Get products
exports.getProducts = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"get products user"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}

// Add Products
exports.addproduct = async (req, res) => {
  const { productname, category, description, price } = req.body;
  try {
    //const product = await Product.create({ productname,category, description, price });
    const product = new Product({ productname, category, description, price });
    product.save();
    res.status(201).json({ success: true, message: "Product Created" })
  } catch (error) {
    errorHandler(error, req, res);
  }

}


// Get products Admin
exports.getproductsAdmin = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"get products admin"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}


exports.updateProduct = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"update products admin"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
      res.status(201).json({success:true,message:"delete products admin"})
    } catch (error) {
      errorHandler(error, req, res);
    }
}


