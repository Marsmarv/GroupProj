import React from 'react'
import Fade from 'react-reveal/Fade'
import {withGlobalProvider} from './GlobalProvider'

const Header = (props) => {
  return (
    <Fade left delay={2500}>
      <div className='header'>
        <Fade delay={1000}><div className='sun'><h3>welcome back {props.username}</h3></div></Fade>
      </div>
    </Fade>
  )
}
export default withGlobalProvider(Header)