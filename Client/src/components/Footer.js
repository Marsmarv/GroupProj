import React from 'react'
// import { Link } from "react-router-dom";
// import Fade from 'react-reveal/Fade'
import { Joystick } from 'react-joystick-component';

const Footer = (props) => {
  const joystick = (event) => {
    if {
      
    }
    console.log(event)
  }
  // const toggleMove = props.showMenu ? "icons" : "no-display"
  return (
    <>
      <div className='footer'>
        {/* <div className='toggle' onTouchStart = {joystick}>
          <div className='control'></div>
        </div> */}
        <Joystick size={100} baseColor="red" stickColor="blue" move={joystick} stop={joystick}></Joystick>
        <div className='home-button'>HOME</div>
        <div className='button-container'>
          <div className='text'>GAMES</div>
          <div className='text'>LOGIN</div>
          <div className='games-button'></div>
          <div className='info-button'></div>
        </div>
        {/* <Link to='/about' className='home-page'>home</Link>
        <Link to='/' className='tic'></Link>
        <Link to='/games' className='game2'></Link> */}
      </div>
    </>
  )
}
export default Footer