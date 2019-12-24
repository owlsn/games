import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import * as base from '../pages/base'

export default () => (
  <HashRouter>
    <Route path="/" component={base.app}></Route>
  </HashRouter>
)
