import React from 'react'
import Axios from 'axios'
const {Consumer,Provider} = React.createContext()

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
    render(){
        return(
            <Provider value={{
                ...this.state,
                getDailyPhoto: this.getDailyPhoto ,
                noDisplayPhoto: this.noDisplayPhoto,
                getPlanetPhotos: this.getPlanetPhotos,
                displayPlanets: this.displayPlanets,
                openMenu: this.openMenu,
                closeMenu: this.closeMenu,
                getGalaxyPhotos: this.getGalaxyPhotos,
                displayGalaxies: this.displayGalaxies
            }}>{this.props.children}
            </Provider>
        )
    }
}

export default GlobalProvider 
export const withGlobalProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)