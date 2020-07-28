import {connect} from "react-redux";
import { getUser } from "../../actions/users.actions";
import { deleteDeviation } from "../../actions/deviations_actions";
import PersonalPage from "./PersonalPage";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  deviations: Object.values(state.entities.deviations),
})

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
  deleteDeviation: (deviationId) => dispatch(deleteDeviation(deviationId)),
})

export default connect(mSTP, mDTP)(PersonalPage);