import React from 'react';
import Clock from './components/clock'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (<Clock time={this.state.time} />);
    }

}

export default App;
