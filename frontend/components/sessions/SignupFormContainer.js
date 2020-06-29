import {connect} from 'react-redux';
import {signup} from './../../actions/session_actions';
import SignupForm from './SignupForm';
import {clearErrors} from '../../actions/errors_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm);
