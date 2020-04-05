import { connect } from "react-redux";
import { Clock, ClockProps } from "../components/Clock";
import { TimeState } from "../reducers/timeKeeper";

const mapStateToProps = ({ time }: TimeState): ClockProps => ({ time });

const TickingClock = connect(mapStateToProps)(Clock);

export default TickingClock;
