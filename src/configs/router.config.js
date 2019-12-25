import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import * as base from '../pages/base'

const App = () => (
  <HashRouter>
    <Route path="/" component={base.app}></Route>
  </HashRouter>
)

export default hot(module)(App)
