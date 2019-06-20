import React from 'react'
import Fade from 'react-reveal/Fade'
import {withGlobalProvider} from './GlobalProvider'

class HomePage extends React.Component{
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
      <Fade right delay={2700}>
        <div className='clouds'>
          <Fade delay={1000}><div className="charizard" style = {styles}></div></Fade> 
        </div>
      </Fade>
    )
  }
}
export default withGlobalProvider(HomePage)