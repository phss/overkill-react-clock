import React from 'react';
import { Clock, PartOfDay } from './components'

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
        return (
            <div>
                <Clock time={this.state.time} />
                <PartOfDay time={this.state.time} />
            </div>
        );
    }

}

export default App;
