import React from 'react'
import { Joystick } from 'react-joystick-component';
import { Link } from "react-router-dom";
import {withGlobalProvider} from './GlobalProvider'

const Footer = (props) => {
  return (
    <>
      <div className='footer'>

        <Joystick size={100} baseColor="grey" stickColor="black" move={props.joystick} stop={props.joystick}></Joystick>

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
export default withGlobalProvider(Footer)