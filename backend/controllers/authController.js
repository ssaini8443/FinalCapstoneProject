const User = require('../models/User');
const errorHandler = require('../middlewares/errorHandler')


// Register
exports.register = async (req, res) => {
    const { name, email, password } = req.body
    try {
      const user = await User.create({ name, email, password });
      
      const token = await user.get_token()
      res.json(
        {
          success: true,
          message: 'User Registered',
          token
        }
      )
    } catch (error) {
      errorHandler(error, req, res);
    }
  
}


// Login
exports.login = async (req, res) => {

  
}


exports.getCurrentUser = async (req, res) => {

  
}
