const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require("mongoose");
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 1989

app.use(express.json())
app.use(morgan('dev'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
// app.use('/app/game', require('./routes/game))

mongoose.set('useCreateIndex', true)
mongoose.connect(`mongoDb://localhost:27017/${"doesn't have a file name yet"}`,
{ useNewUrlParser: true },
(err) => {
  if (err) throw err;
}) 
