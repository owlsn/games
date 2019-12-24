import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { hot } from 'react-hot-loader/root'
import * as serviceWorker from './serviceWorker'
import Routes from './configs/router.config'
import { Provider } from 'react-redux'
import configure from './middleware/index'

const HotRoutes = hot(Routes)
const store = configure({})

ReactDOM.render(
  <Provider store={store}>
    <HotRoutes />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
