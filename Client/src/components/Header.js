import React from 'react'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <Fade left delay={3500}>
      <div className='header'>
        <Fade delay={1000}><div className='sun'></div></Fade>
      </div>
    </Fade>
  )
}
export default Header