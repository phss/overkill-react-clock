import React from 'react';
import { TickingClock, PartOfDayContainer } from './containers'

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
                <h1>Overkill React Clock</h1>
                <TickingClock />
                <PartOfDayContainer />
            </div>
        );
    }

}

export default App;
