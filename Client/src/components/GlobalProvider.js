import React from 'react'
import Axios from 'axios'
const gameAxios = Axios.create()
const {Consumer,Provider} = React.createContext()

gameAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class GlobalProvider extends React.Component{
    constructor() {
        super()
        this.state = {
            positionY: 150,
            positionX: 50,
            password: '',
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || '',
            userData: {},
            wins: 0,
            losses: 0
        }
    }

    getUserData = () => {
        gameAxios.get('/api/game').then(response => {
            console.log(response.data)
            this.setState({
                userData: response.data,
                wins: response.data[0].wins,
                losses: response.data[0].losses
            })
            console.log(`Wins: ${this.state.userData[0].wins}`, `Losses: ${this.state.userData[0].losses}`)
        })
    }

    userSignUp = (userInfo) => {
        return Axios.post("/auth/signup", userInfo).then(res => {
            const { user, token } = res.data
            console.log(res.data)
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({
                user,
                token
            });

            return res
        })
    }

    userLogin = (userInfo) => {
        return Axios.post("/auth/login", userInfo).then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({
                user,
                token
            });
            // console.log(res.data)
            this.getUserData()
            return res
        })
    }

    logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.setState({ user: {}, token: "" })
        
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
                userSignUp: this.userSignUp,
                userLogin: this.userLogin,
                logout: this.logout
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