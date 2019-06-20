import React from 'react';
import {withGlobalProvider} from './GlobalProvider'

const Login = (props) => {
  const { handleChange, handleSubmit, username, password } = props
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
      <br></br>
      <button>Log in</button>
    </form>
    </div>
  )
}

export default withGlobalProvider(Login)