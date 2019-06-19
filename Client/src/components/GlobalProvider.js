import React from 'react'
const {Consumer,Provider} = React.createContext()

class GlobalProvider extends React.Component{
    constructor() {
        super()
        this.state = {
            positionY: 200,
            positionX: 200,
            username: '',
            password: ''
        }
    }
    joystick = (event) => {
        console.log(event.x)
        console.log(event.y)
        this.setState(prev => {
            return({
                positionY: prev.positionY - event.y/30,
                positionX: prev.positionX - event.x/30
            })   
        })  
    }
    handlePosition = (event) => {
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
        } else if(event.which === 37){
            this.setState(prev => {
                return {
                    positionX: prev.positionX +10
            }
        })
        } else if(event.which === 39) {
            this.setState(prev => {
                return {
                positionX: prev.positionX -10
                }
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value});
    }

    render(){
        return(
            <Provider value={{
                ...this.state,
                joystick: this.joystick,
                handlePosition: this.handlePosition,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange
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