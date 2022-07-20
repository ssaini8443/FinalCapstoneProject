const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const { ObjectId } = mongoose.Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique:true,
    },password: {
        type: String,
        required: [true, 'Enter Missign'],
        minlength: 6,
      },
    role: {
      type: String,
      default: 'user',
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      street: String,
      city: String,
      country: String,
      postcode: String,
    },
    favourites: [{ type: ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  }
)




UserSchema.pre('save', async function (next) {
    const user = this
    user.password = await bcrypt.hash(user.password, 6)
    next()
})

UserSchema.methods.get_token = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'generatetoken')
    return token
}


UserSchema.statics.findUser = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Invalid Credentials')
    }

    const pw = await bcrypt.compare(password, user.password)

    if (!pw) {
        throw new Error('Invalid Credentials')
    }

    return user
}


const User = mongoose.model('User', UserSchema)
module.exports = User