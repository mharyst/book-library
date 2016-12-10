import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'

import { routes } from './routes'
import configureStore from './store/configureStore'
import './styles/main.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.react-view')
)
