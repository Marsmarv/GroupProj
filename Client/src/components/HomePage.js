import React from 'react'
import Fade from 'react-reveal/Fade'
import {withGlobalProvider} from './GlobalProvider'

class About extends React.Component{
  constructor() {
    super()
    this.state = {
      
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.props.handlePosition)
  }
  componentWillMount(){
    window.removeEventListener('keydown', () => console.log('hello'))
  }
  
  render() {
    console.log(this)
    const styles= {
      position: 'fixed',
      top: `${this.props.positionY}pt`,
      right: `${this.props.positionX}pt`
    }
    return (
      <Fade right delay={3500}>
        <div className='about content'>
          <Fade delay={1000}><div className="charizard" style = {styles}></div></Fade> 
        </div>
      </Fade>
    )
  }
}
export default withGlobalProvider(About)