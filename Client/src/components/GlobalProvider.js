import React from 'react'
import Axios from 'axios'
const {Consumer,Provider} = React.createContext()

class GlobalProvider extends React.Component{
    constructor() {
        super()
        this.state = {
            positionY: 150,
            positionX: 50,
            username: '',
            password: '',
            token: ''
        }
    }

    userSignUp = (userInfo) => {
        return Axios.post("/auth/signup", userInfo).then(res => {
            const { username, token } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("username", JSON.stringify(username));
            this.setState({
                username,
                token
            });
            return res
        })
    }

    userLogin = (userInfo) => {
        return Axios.post("/auth/login", userInfo).then(res => {
            const { username, token } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("username", JSON.stringify(username));
            this.setState({
                username,
                token
            });
            return res
        })
    }

    

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value});
    }


    joystick = (event) => {
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

    render(){
        return(
            <Provider value={{
                ...this.state,
                signUp: this.signUp,
                joystick: this.joystick,
                handlePosition: this.handlePosition,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                userSignUp: this.userSignUp
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