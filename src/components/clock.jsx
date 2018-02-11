import React from 'react';

const Clock = (props) => {
    return (<p className="clock">{props.time.toLocaleTimeString()}</p>);
}

export default Clock;
