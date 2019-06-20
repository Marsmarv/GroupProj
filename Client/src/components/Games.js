import React from 'react'
import Fade from 'react-reveal/Fade'
import TicTacToeApp from '../tic-tac-toe/TicTacToeApp'
import ConnectFourApp from '../connect-four/ConnectFourApp'
import { Link } from "react-router-dom";

import { Switch, Route } from 'react-router-dom'

const Games = () => {
  return (
    <Fade bottom>
      <div className='games content'>
        <div className='games-content'>
          <Switch>
            <Route path='/games/connect-four' component={ConnectFourApp} />
            <Route path='/games/tic-tac-toe' component={TicTacToeApp} />
          </Switch>
        </div>
        <div className='game-nav'>
          <Link to='/games/tic-tac-toe'><button>TicTacToe</button></Link>
          <Link to='/games/connect-four'><button>ConnectFour</button></Link>
        </div>
      </div>
    </Fade>
  )
}
export default Games