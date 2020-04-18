import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { timeKeeper } from './Clock/reducers'
import { tickClock } from './Clock/sagas'
import { App } from './App'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  timeKeeper,
  compose(
    applyMiddleware(sagaMiddleware),
    // @ts-ignore
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

sagaMiddleware.run(tickClock)
