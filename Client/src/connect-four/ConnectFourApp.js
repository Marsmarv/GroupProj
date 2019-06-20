import React from 'react'
import { Client } from 'boardgame.io/react';
import Board from './Board';
import GameLogic from './Game'
import './App.css'
import Fade from 'react-reveal/Fade'

const ConnectFour = Client({
  game: GameLogic,
  board: Board,  
  debug: false
})

const ConnectFourApp = () => (
  <Fade>
  <div>
    <ConnectFour/>
  </div>
  </Fade>
)

export default ConnectFourApp;