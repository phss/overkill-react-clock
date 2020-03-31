import { connect } from "react-redux";
import PartOfDay from "../components/partOfDay";

const mapStateToProps = (state) => ({
  time: state.time,
});

const PartOfDayContainer = connect(mapStateToProps)(PartOfDay);

export default PartOfDayContainer;
