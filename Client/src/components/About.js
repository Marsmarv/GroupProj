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
    window.addEventListener('keydown', this.props.handlePositionY)
  }
  componentWillMount(){
    window.removeEventListener('keydown', () => console.log('hello'))
  }
  
  render() {
    console.log(this)
    const styles= {
      position: 'relative',
      top: `${this.props.positionY}pt`
    }
    return (
      <Fade left>
        <div className='about content'>
          <div className="charizard" style = {styles}></div> 
        </div>
      </Fade>
    )
  }
}
export default withGlobalProvider(About)