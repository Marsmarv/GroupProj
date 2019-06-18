import React from 'react'
import Fade from 'react-reveal/Fade'

class About extends React.Component{
  constructor() {
    super()
    this.state = {
      positionY: 200,
    }
  }
  
  handlePositionY = (event) => {
    console.log(event.which)
    if(event.which === 40){
      this.setState(prev => {
        return {
          positionY: prev.positionY +10
        }
      })
    } else if(event.which === 38) {
      this.setState(prev => {
        return {
          positionY: prev.positionY -10
        }
      })
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handlePositionY)
  }
  componentWillMount(){
    window.removeEventListener('keydown', () => console.log('hello'))
  }
  
  render() {
    const styles= {
      position: 'relative',
      top: `${this.state.positionY}pt`
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
export default About