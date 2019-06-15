const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(morgan('dev'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('api/game', require('./Server/routes/game'))

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/game-app',
  { useNewUrlParser: true},
  (err) => {
    if (err) throw err;
    console.log('connected to the database')
  }
)

app.use('/auth', require('./Server/routes/auth'))
app.use('/game', require('./Server/routes/game'))

app.use((err, req, res, next) => {
  console.error(err)
  return res.send({ message: err.message })
})

app.use((err, req, res, next) => {
  console.error(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`)
})