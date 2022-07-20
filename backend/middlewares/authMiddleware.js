const jwt = require('jsonwebtoken')
const User = require('../models/User')


exports.auth = async (req, res, next) => {
    try {
        const authorizedToken = req.header('Authorization').replace('Bearer ', '');
        const token = jwt.verify(authorizedToken, 'generatetoken');
        const user = await User.findOne({ _id: token._id })

        req.user = user
        req.role= user.role
        next()
    } catch (e) {
        res.status(401).send({ success:false,error: 'Unathorized Access' })
    }
}


exports.adminAuth = async (req, res, next) => {
    try {
        if(req.role != 'admin'){
            return res.status(401).send({ success:false,error: 'Admin Unathorized Access' })
        }
        next()
    } catch (e) {
        res.status(401).send({ success:false,error: 'Admin Unathorized Access' })
    }
}

