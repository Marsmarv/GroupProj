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

todoRouter.get("/:gameId", (req, res, next) => {
  Todo.findOne( {_id: req.params.gameId, user: req.user._id}, (err, todo) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      if (!todo) {
          res.status(404)
          return next(new Error("No todo item found."));
      }
      return res.send(todo);
  });
});

todoRouter.put("/:todoId", (req, res, next) => {
  Todo.findOneAndUpdate(
      {_id: req.params.todoId, user: req.user._ids},
      req.body,
      { new: true },
      (err, todo) => {
          if (err) {
              console.log("Error");
              res.status(500);
              return next(err);
          }
          return res.send(todo);
      }
  );
});

todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndRemove({_id:req.params.todoId, user:req.user._id}, (err, todo) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      return res.send(todo);
  });
});

module.exports = gameRouter

// not completeted
// don't really know what we'll be needing a game component for yet