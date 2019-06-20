import React from 'react'
import Footer from './components/Footer'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Games from './components/Games'
import Header from './components/Header'
import './components/styles.css'
import Fade from 'react-reveal/Fade'
// import Login from './components/Login'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Fade>
      <Header /> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={Login} />
          <Route path='/games' component={Games} />  
          
        </Switch>
    </Fade>
      <Footer />
    </>
  )
}

export default App