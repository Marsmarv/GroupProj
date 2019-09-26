import React from 'react'
import { Client } from 'boardgame.io/react';
import TicTacToe from './Game';
import Board from './Board';
import './App.css'

const TicTacToeClient = Client({
  game: TicTacToe,
  board: Board,
  // multiplayer: { local: true },
  debug: false
});

const TicTacToeApp = () => (
  <div>
    <TicTacToeClient />
  </div>
)

export default TicTacToeApp;