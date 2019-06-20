import React from 'react'
import { Client } from 'boardgame.io/react';
import Board from './Board';
import GameLogic from './Game'
import './App.css'

const ConnectFour = Client({
  game: GameLogic,
  board: Board,  
  debug: false
})

const ConnectFourApp = () => (
  <div>
    <ConnectFour/>
  </div>
)

export default ConnectFourApp;