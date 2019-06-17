const express = require("express");
const gameRouter = express.Router();
const Game = require("../models/game");

gameRouter.get('/', (req, res, next) => {
  console.log(req.user_id)
  Game.find({user: req.user._id}, (err, games) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.send(games)
  })
})

gameRouter.post('/', (req, res, next) => {
  console.log(req.user._id)
  const game = new Game(req.body)
  game.user = req.user._id
  game.save(function (err, newGame) {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(newGame)
  })
})

module.exports = gameRouter

// not completeted
// don't really know what we'll be needing a game component for yet