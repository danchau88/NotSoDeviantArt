import {connect} from "react-redux";
import { getUser } from "../../actions/users.actions";
import PersonalPage from "./PersonalPage";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  deviations: Object.values(state.entities.deviations),
})

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
})

export default connect(mSTP, mDTP)(PersonalPage);