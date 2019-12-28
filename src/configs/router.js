import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../containers/app'
import TopHeader from '../components/header/header'
import InnerHeader from '../components/inner-header'
import Banner from '../components/banner'
import Index from '../containers/index'
import { hot } from 'react-hot-loader'

const HotRoute = () => (
  <Router>
    <Switch>
      <Route path="/about"></Route>
      <Route path="/header">
        <TopHeader />
      </Route>
      <Route path="/banner">
        <Banner />
      </Route>
      <Route path="/inner_header">
        <InnerHeader />
      </Route>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)
export default hot(module)(HotRoute)
