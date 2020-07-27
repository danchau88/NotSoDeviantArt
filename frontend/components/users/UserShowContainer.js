import {connect} from "react-redux";
import UserShow from "./UserShow";
import { getUser } from "../../actions/users.actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    user: state.entities.users[ownProps.match.params.id],
    deviations: Object.values(state.entities.deviations), 
  }
}

const mDTP = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(UserShow);