import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar content'>
      <Link to='/about' className='nav'>About</Link>
      <Link to='/' className='nav'>Home</Link>
      <Link to='/games' className='nav'>Games</Link>
    </div>
  )
}
export default Navbar