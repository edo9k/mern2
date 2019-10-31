/** @format */

import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Landing from './components/layout/Landing.js'

import './App.css'

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
    </Fragment>
  </Router>
)

export default App
