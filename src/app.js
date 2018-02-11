import React from 'react';
import { connect } from 'react-redux';
import { TickingClock, PartOfDayContainer } from './containers'
import { updateClock } from './actions'

export class App extends React.Component {
    componentDidMount() {
        this.timer = setInterval(() => this.props.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
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

const mapDispatchToProps = (dispatch) => ({
    tick: () => { dispatch(updateClock(new Date())) },
});

export default connect(null, mapDispatchToProps)(App);
