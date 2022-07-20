const express = require('express')
const router = express.Router();


const {
  register,login,getCurrentUser
} = require('../controllers/authController')

const {auth,adminAuth} = require('../middlewares/authMiddleware')


router.route('/auth/register')
.post(register)


router.route('/auth/login')
.post(login)


router.route('/auth/me')
.get(auth,getCurrentUser)



module.exports = router