import React from 'react';
import Clock from './components/clock'

const App = (props) => {
    return (
            <Clock time={new Date()} />
    );
}

export default App;
