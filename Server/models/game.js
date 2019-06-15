const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  wins: {
    type: String,
    required: false
  },
  losses: {
    type: String,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Game", gameSchema)