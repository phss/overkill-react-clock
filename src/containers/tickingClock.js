import { connect } from 'react-redux';
import Clock from '../components/clock';

const mapStateToProps = (state) => ({
    time: state.time,
});

const TickingClock = connect(mapStateToProps)(Clock);

export default TickingClock;
