import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import HotRoute from './configs/router'
import configure from './middleware'

const store = configure({})

ReactDOM.render(
  <Provider store={store}>
    <HotRoute />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
