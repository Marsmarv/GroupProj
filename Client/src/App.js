import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games';
import Footer from './components/Footer'
import './components/styles.css'
import Fade from 'react-reveal/Fade'
import Login from './components/Login'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Fade>
      <Login />
        <Switch>
        <Route  path='/' component={Footer} /> {/* this is technically the header but i didn't rename it */}
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/games' component={Games} />
          <Route  path='/' component={Navbar} /> {/*this is where the game images would go  */}
        </Switch>
    </Fade>
  )
}

export default App