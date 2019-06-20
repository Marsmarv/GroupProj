import React from 'react'
import Fade from 'react-reveal/Fade'
import ConnectFourApp from '../connect-four/ConnectFourApp'
import { Link } from "react-router-dom";

import { Switch, Route } from 'react-router-dom'

const Games = () => {
  return (
    <Fade left>
      <div className='games content'>
        <Fade right><Link className="connect" to='/games/connect-four'>ConnectFour</Link></Fade>
        <div className='games-content'>
          <Switch>
            <Route path='/games/connect-four' component={ConnectFourApp} />
          </Switch>
        </div>
      </div>
    </Fade>
  )
}
export default Games