import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games';
import Footer from './components/Footer'
import './components/styles.css'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/games' component={Games} />
        </Switch>
      <Footer />
    </>
  )
}

export default App