import React from 'react';
import {withGlobalProvider} from './GlobalProvider'
import Fade from 'react-reveal/Fade'

const Login = (props) => {
  const { handleChange, username, password, userSignUp } = props

  const handleSubmit = (e) => {
      e.preventDefault()
      userSignUp({username, password}).then(()=> {
        props.history.push('/')
      })
      alert(`successful sign up for ${props.username}`)
  }

  return (
    <Fade right>
      <div className="login-container">
      <form className="form-set" onSubmit={handleSubmit}>
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
        <button>Sign up</button>
        <button>Log in</button>
      </form>
      </div>
        <h3 className="welcome">Welcome {props.username}!</h3>
    </Fade>
  )
}

export default withGlobalProvider(Login)