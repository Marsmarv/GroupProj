import React from 'react';
import {withGlobalProvider} from './GlobalProvider'

const Login = (props) => {
  const { handleChange, username, password, userSignUp } = props

  const handleSubmit = (e) => {
      e.preventDefault()
      userSignUp({username, password}).then(()=> {
        props.history.push('/')
      })
      alert('successful sign up')
  }

  return (
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
      value={password} /> <br/>
      <button>Log in</button>
    </form>
    </div>
  )
}

export default withGlobalProvider(Login)