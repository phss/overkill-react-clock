import * as React from 'react'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Clock } from './Clock'
import clockReducer from './Clock/reducers'
import configurationReducer from './Configuration/reducers'
import clockSaga from './Clock/sagas'
import { Configuration } from './Configuration'
import './App.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({
    clock: clockReducer,
    configuration: configurationReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    // @ts-ignore
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(clockSaga)

const Title = () => <h1 className="title">Overkill React Clock</h1>

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
