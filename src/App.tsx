import { Container } from '@material-ui/core'
import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './App.css'
import { Clock } from './Clock'
import clockReducer from './Clock/reducers'
import clockSaga from './Clock/sagas'
import { Configuration } from './Configuration'
import configurationReducer from './Configuration/reducers'

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
  <Container>
    <Title />
    <Clock />
    <Configuration />
  </Container>
)

export const App = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
)
