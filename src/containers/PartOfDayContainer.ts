import { connect } from "react-redux";
import { PartOfDay, PartOfDayProps } from "../components/PartOfDay";
import { TimeState } from "../reducers/timeKeeper";

const mapStateToProps = ({ time }: TimeState): PartOfDayProps => ({ time });

const PartOfDayContainer = connect(mapStateToProps)(PartOfDay);

export default PartOfDayContainer;
