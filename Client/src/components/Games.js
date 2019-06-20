import React from 'react'
import Fade from 'react-reveal/Fade'
// import TicTacToeApp from '../tic-tac-toe/TicTacToeApp'
import ConnectFourApp from '../connect-four/ConnectFourApp'
import { Link } from "react-router-dom";

import { Switch, Route } from 'react-router-dom'

const Games = () => {
  return (
    <Fade bottom>
      <div className='games content'>
        {/* <Link to='/games/tic-tac-toe'>TicTacToe</Link> */}
        <Link to='/games/connect-four'>ConnectFour</Link>
        <div className='games-content'>
          <Switch>
            <Route path='/games/connect-four' component={ConnectFourApp} />
            {/* <Route path='/games/tic-tac-toe' component={TicTacToeApp} /> */}
          </Switch>
        </div>
      </div>
    </Fade>
  )
}
export default Games