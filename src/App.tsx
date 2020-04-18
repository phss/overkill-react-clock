import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Clock } from './Clock'
import clockReducer from './Clock/reducers'
import clockSaga from './Clock/sagas'
import { Configuration } from './Configuration'
import './App.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  clockReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // @ts-ignore
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(clockSaga)

const Title = () => (
  <h1 className="title">
    <FontAwesomeIcon icon={faClock} />
    Overkill React Clock
    <FontAwesomeIcon icon={faClock} />
  </h1>
)

const AppComponent = () => (
  <div>
    <Title />
    <Clock />
    <Configuration />
  </div>
)

export const App = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
)
