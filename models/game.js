const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  wins: {
    type: Number,
    required: false
  },
  losses: {
    type: Number,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Game", gameSchema)

//not sure what else will be needed here