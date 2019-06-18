import React from 'react'
const {Consumer,Provider} = React.createContext()

class GlobalProvider extends React.Component{
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
    render(){
        return(
            <Provider value={{
                ...this.state,
                handlePositionY: this.handlePositionY
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