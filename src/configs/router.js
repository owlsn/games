import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../containers/app'
import TopHeader from '../components/header'
import { hot } from 'react-hot-loader'

const HotRoute = () => (
  <Router>
    <Switch>
      <Route path="/about"></Route>
      <Route path="/header">
        <TopHeader />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
)
export default hot(module)(HotRoute)
