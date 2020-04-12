import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { timeKeeper } from './reducers/timeKeeper'
import { tickClock } from './sagas/tickClock'
import { App } from './containers/App'
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
