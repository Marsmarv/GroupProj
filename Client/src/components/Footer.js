import React from 'react'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade'

const Footer = (props) => {
  const joystick = (event) => {
    console.log(event)
  }
  // const toggleMove = props.showMenu ? "icons" : "no-display"
  return (
    <>
      <div className='footer'>
        <div className='toggle' onTouchStart = {joystick}>
          <div className='control'></div>
        </div>
        <Link to='/' className='home-button'>HOME</Link>
        <div className='button-container'>
          <div to='/games' className='text'>GAMES</div>
          <div to='/login' className='text'>LOGIN</div>
          <Link to='/games' className='games-button'></Link>
          <Link to='/login' className='info-button'></Link>
        </div>
        {/* <Link to='/about' className='home-page'>home</Link>
        <Link to='/' className='tic'></Link>
        <Link to='/games' className='game2'></Link> */}
      </div>
    </>
  )
}
export default Footer