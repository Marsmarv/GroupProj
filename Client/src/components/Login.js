import React from 'react';
import {withGlobalProvider} from './GlobalProvider'
import Fade from 'react-reveal/Fade'

const Login = (props) => {
  const { handleChange, username, password, userSignUp, userLogin } = props

  const handleLogin = (e) => {
    e.preventDefault()
    userLogin({username, password}).then(()=> {
      props.history.push('/games')
    })
    alert(`successfully logged in for ${props.username}`)
  }
  const handleSignup = (e) => {
    e.preventDefault()
    userSignUp({username, password}).then(()=> {
      props.history.push('/')
    })
    alert(`successful sign up for ${props.username}`)
}

  return (
    <Fade right>
      <div className="login-container">
      <form className="form-set">
        <input onChange={handleChange} 
        type="text" 
        name='username'
        placeholder="Username"
        value={username} /> <br/><br/>
        <input onChange={handleChange} 
        type="text" 
        name='password'
        placeholder="Password"
        value={password} /> <br/><br/>
        <button onClick={handleSignup}>Sign up</button>
        <button onClick={handleLogin}>Log in</button>
      </form>
      </div>
        <h3 className="welcome">Welcome {props.username}!</h3>
    </Fade>
  )
}

export default withGlobalProvider(Login)