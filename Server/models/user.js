const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // to make the password more secure?
    // lowercase: true,
    // uppercase: true,
    // number: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model("User", userSchema)