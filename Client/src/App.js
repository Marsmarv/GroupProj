import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import Header from './components/Header'
import './components/styles.css'
import Fade from 'react-reveal/Fade'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Fade>
      <Header /> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/games' component={Games} />
        </Switch>
      <Footer />
    </Fade>
  )
}

export default App