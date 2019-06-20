import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import {withGlobalProvider} from './GlobalProvider'


const Header = (props) => {
    const [ showStats, setShowStats ] = useState(false)

    const modalDisplay = showStats ? "show-modal" : "no-display"

    return (
      <>
        <Fade left delay={2500}>
          <div className='header'>
            <Fade delay={1000}>
              <div className='sun' onClick={() => setShowStats(!showStats)}></div>
            </Fade>
          </div>
        </Fade>
      <Fade top when={showStats === true}>
        <div className={`outer-modal ${modalDisplay}`}>
          <div className="stats-modal">
            User: {props.username}  <h3>Wins: {props.wins} , Losses: {props.losses}</h3>
          </div>
        </div>
      </Fade>
      </>
  )
}
export default withGlobalProvider(Header)