import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../containers/Login'
import { hot } from 'react-hot-loader'

const HotRoute = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
)
export default hot(module)(HotRoute)
