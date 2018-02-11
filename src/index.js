import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';

function tick() {
    ReactDOM.render(
        <Clock time={new Date()}/>,
        document.getElementById('root'));
}

setInterval(tick, 1000);
