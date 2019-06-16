import React from 'react'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade'

const Navbar = () => {
  return (
    <Fade left>
      <div className='navbar content'>
        <Link to='/about' className='nav'>About</Link>
        <Link to='/' className='nav'>Home</Link>
        <Link to='/games' className='nav'>Games</Link>
      </div>
    </Fade>
  )
}
export default Navbar