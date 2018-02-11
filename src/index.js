import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { timeKeeper } from './reducers';
import sagas from './sagas';
import App from './app';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    timeKeeper,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

sagaMiddleware.run(sagas);
