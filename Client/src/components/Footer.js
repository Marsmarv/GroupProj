import React from 'react';
import { Joystick } from 'react-joystick-component';
import { Link } from "react-router-dom";
import {withGlobalProvider} from './GlobalProvider'

const Footer = (props) => {
  return (
    <>
    <div className="over-footer">
      <div className='footer'>

        <div className="joy"><Joystick size={100} baseColor="#d4d7d0" stickColor="#555752" move={props.joystick} stop={props.joystick}></Joystick></div>

        <Link to='/' className='home-button'>HOME</Link>
        <div className='button-container'>
          <div className='text'>GAMES</div>
          <div className='text'>LOGIN</div>
          <Link to='/games' className='games-button'></Link>
          <Link to='/login' className='info-button'></Link>
        </div>
      </div>
      </div>
    </>
  )
}
export default withGlobalProvider(Footer)