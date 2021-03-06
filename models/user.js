const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model("User", userSchema)

// component complete