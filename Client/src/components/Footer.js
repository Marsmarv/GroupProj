import React from 'react'
import { Joystick } from 'react-joystick-component';
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
        <Joystick size={100} baseColor="red" stickColor="blue" move={joystick} stop={joystick}></Joystick>
        <Link to='/' className='home-button'>HOME</Link>
        <div className='button-container'>
          <div className='text'>GAMES</div>
          <div className='text'>LOGIN</div>
          <Link to='/games' className='games-button'></Link>
          <Link to='/login' className='info-button'></Link>
        </div>
      </div>
    </>
  )
}
export default Footer