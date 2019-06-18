import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import Header from './components/Header'
import './components/styles.css'
import Fade from 'react-reveal/Fade'
import Login from './components/Login'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Fade>
      <Header /> 
        <Switch>
        <Route  path='/' component={Footer} /> {/* this is technically the header but i didn't rename it */}
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/games' component={Games} />
          <Route  path='/' component={Navbar} /> {/*this is where the game images would go  */}
        </Switch>
      <Footer />
    </Fade>
  )
}

export default App