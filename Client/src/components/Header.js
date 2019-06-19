import React from 'react'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <Fade left>
      <div className='header'>
        <Fade delay={1000}><div className='login'></div></Fade>
      </div>
    </Fade>
  )
}
export default Header