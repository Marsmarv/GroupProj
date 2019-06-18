import React from 'react'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <Fade left>
      <div className='footer'>
        <div className='toggle'>
          <div className='control'></div>
        </div>
        <div className='home-button'>HOME</div>
        <div className='button-container'>
          <div className='text'>GAMES</div>
          <div className='text'>INFO</div>
          <div className='games-button'></div>
          <div className='info-button'></div>
        </div>
        {/* <Link to='/about' className='home-page'>home</Link>
        <Link to='/' className='tic'></Link>
        <Link to='/games' className='game2'></Link> */}
      </div>
    </Fade>
  )
}
export default Footer