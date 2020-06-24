import {connect} from 'react-redux';
import {login} from './../../actions/session_actions';
import SignupForm from './SignupForm';

const mSTP = (state) => ({
    errors: state.errors.session,
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SignupForm);
